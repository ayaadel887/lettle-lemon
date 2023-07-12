import React, { useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

const Frominput = () => {
  const [firstName, onChangefirstName] = useState("");
  const [lastName, onChangelastName] = useState("");
  const [massage, onChangeMassage] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  return (
    <ScrollView style={FormStyle.container}>
      <Text style={FormStyle.headerText}>
        How was your visit to Little Lemon?
      </Text>

      <Text style={FormStyle.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>

      <TextInput
        style={FormStyle.inputBox}
        value={firstName}
        onChangeText={onChangefirstName}
      />

      <TextInput
        style={FormStyle.inputBox}
        value={lastName}
        onChangeText={onChangelastName}
      />

      <TextInput
        style={FormStyle.inputBox}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
      />
      <TextInput
        style={FormStyle.messageInput}
        value={massage}
        onChangeText={onChangeMassage}
      />
    </ScrollView>
  );
};
const FormStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
export default Frominput;
