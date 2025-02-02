import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../../constants";
import FormFields from "../../component/FormFields";

const SignIn = () => {

const [form, setForm] = useState({
  email: "",
  password: "",
})

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full px-4 my-6 justify-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 115, height: 35 }}
            className="w-[115px] h-[35px]"
          />
          <Text
            className="text-2xl text-white font-semibold mt-10 font-psemibold"
            style={{
              fontSize: 24,
              lineHeight: 32,
              color: "#fff",
              fontWeight: 600,
              marginTop: 40,
            }}
          >
            Log In to Aora{" "}
          </Text>
          <FormFields
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFields
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form,
            password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
