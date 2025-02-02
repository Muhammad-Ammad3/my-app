import { Text, TouchableOpacity } from "react-native";
import React from "react";
import "../global.css";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      style={{
        backgroundColor: "#FF9C01",
        borderRadius: 12,
        minHeight: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
      disabled={isLoading}
    >
      <Text
        className={`${textStyles}`}
        style={{
          color: "#161622",
          fontFamily: "sans-serif",
          fontSize: 18,
          lineHeight: 28,
          fontWeight: 600,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
