import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { images } from "../../constants";
import FormFields from "../../component/FormFields";
import CustomButton from "../../component/customButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

 const submit = async () => {

    if(!form.email || !form.password){
      Alert.alert("Error", "Please fill in all the fields")
    }
    setisSubmitting(true)
    try {
      await signIn(form.email, form.password);

      router.replace("/home")

    } catch (error) {
      Alert.alert("Error",error.message)
    }finally{
      setisSubmitting(false)
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full h-full px-4 my-6 justify-center min-h-[85vh]"
          style={{
            width: "auto",
            height: "auto",
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: "center",
            minHeight: 650,
          }}
        >
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
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFields
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              style={{
                fontSize: 18,
                lineHeight: 28,
                fontFamily: "Poppins-SemiBold, sans-serif",
                color: "#FF9C01",
              }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
