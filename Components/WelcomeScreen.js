import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        // resizeMode="contain"
        style={styles.logo}
        source={require("../Img/Lemon-Logo.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.logo}
        source={require("../Img/Picture1.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon pic 1"}
      />
      <Image
        style={styles.logo}
        source={require("../Img/Picture2.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon pic 2"}
      />
      <Image
        style={styles.logo}
        source={require("../Img/Picture3.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon pic 3"}
      />
      <Image
        style={styles.logo}
        source={require("../Img/Picture4.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon pic 4"}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  logo: { height: 100, width: 300, resizeMode: "contain" },
  img: {
    width: 350,
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default WelcomeScreen;
