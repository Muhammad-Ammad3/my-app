import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../component/customButton";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            style={{ height: 84, width: 130 }}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="w-full"
            style={{ maxWidth: 380, height: 300 }}
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Discover Endless Possibility with{" "}
              <Text style={{ color: "#FF8E01" }}>Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={{
                width: 136,
                height: 15,
              }}
              className="absolute -bottom-2 -right-2"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton 
          title={"Continue with Email"}
          handlePress={() => router.push("/sign_in")}
          containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
     <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
};

export default App;
