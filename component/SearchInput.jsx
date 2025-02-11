import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  return (
    <View
      style={{
        width: "auto",
        height: 64,
        backgroundColor: "#1E1E2D",
        borderWidth: 2,
        borderColor: isFocused ? "#4CAF50" : "#232533", // Green border on focus
        borderRadius: 16,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
      }}
    >
      <TextInput
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: "#fff",
          flex: 1,
          fontFamily: "Poppins-Regular",
        }}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
        onFocus={() => setIsFocused(true)} // Focus event
        onBlur={() => setIsFocused(false)} // Blur event
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }
          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
        style={{ marginRight: 15 }}
      >
        <Image
          source={icons.search}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
