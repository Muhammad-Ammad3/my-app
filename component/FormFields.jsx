import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormFields = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        style={{
          width: "auto",
          height: 64,
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: "#1E1E2D",
          borderWidth: 2,
          borderColor: "#232533",
          borderRadius: 16,
          borderStyle: "solid #FF9C01",
          alignItems: "center"
        }}
      >
        <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormFields;
