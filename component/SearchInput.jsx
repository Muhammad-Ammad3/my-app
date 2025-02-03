import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
      <View className="space-x-4 flex-row"
        style={{
            width: "auto",
            height: 64,
            backgroundColor: "#1E1E2D",
            borderWidth: 2,
            borderColor: "#232533",
            borderRadius: 16,
            alignItems: "center",
            borderStyle: "solid",
            display: "flex",
            justifyContent: "flex-end",
            
        }}
      >
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        <TouchableOpacity style={{marginRight: 15}}>
            <Image 
            source={icons.search}
            className="w-5 h-5 "
            style={{width: 20, height: 20}}
            resizeMode="contain"/>
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;
