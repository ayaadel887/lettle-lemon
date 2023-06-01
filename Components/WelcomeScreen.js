import React from "react";
import { Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        Welcome to Little Lemon
      </Text>
      <Text style={{ fontSize: 20, color: "#fff" }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};

export default WelcomeScreen;
