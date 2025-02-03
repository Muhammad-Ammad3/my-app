import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormFields = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-bold">{title}</Text>
      <View
        style={{
          width: "auto",
          height: 64,
          backgroundColor: "#1E1E2D",
          borderWidth: 2,
          borderColor: "#232533",
          borderRadius: 16,
          alignItems: "center",
          flexDirection: "row",
          borderStyle: "solid #FF9C01",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: 16,
            lineHeight: 24,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFields;
