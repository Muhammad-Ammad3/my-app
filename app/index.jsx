import { ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context"


const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: "100%",}}>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App
