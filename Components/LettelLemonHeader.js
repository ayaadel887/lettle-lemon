import React from "react";
import { Text, View } from "react-native";

const LettelLemonHeader = () => {
  return (
    <View style={{ flex: 0.1, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
          padding: 35,
          fontSize: 30,
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
};

export default LettelLemonHeader;
