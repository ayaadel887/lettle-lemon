import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderLemon = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Little Lemon <Text style={headerStyles.innerText}> Little Lemon</Text>
      </Text>
    </View>
  );
};
const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  innerText: {
    fontWeight: "bold",
  },
});

export default HeaderLemon;
