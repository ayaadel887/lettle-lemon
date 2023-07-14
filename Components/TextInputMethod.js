import React, { useState } from "react";
import { StyleSheet, Text, Alert, ScrollView, TextInput } from "react-native";

const TextInputMethod = () => {
  const [onfoc, onChangeonfoc] = useState(" ");

  return (
    <>
      <ScrollView>
        <Text>hi</Text>
        <TextInput
          style={styles.input}
          value={onfoc}
          onChangeText={onChangeonfoc}
          placeholder={"First Name"}
          onFocus={() => {
            Alert.alert("First name is focussed");
          }}
        />
        <TextInput
          style={styles.input}
          value={onfoc}
          onChangeText={onChangeonfoc}
          placeholder={"First Name"}
          // onBlur={() => {
          //   Alert.alert("First name is onBlur");
          // }}
          onBlur={() => {
            Alert.alert("First name is onBlur");
          }}
        />
        <TextInput
          style={styles.input}
          value={onfoc}
          onChangeText={onChangeonfoc}
          placeholder={"First Name"}
          // onBlur={() => {
          //  Alert.alert("First name is onBlur");
          // }}
          onEndEditing={() => {
            Alert.alert("First name is onEndEditing");
          }}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  input: { height: 40, backgroundColor: "red", marginBottom: 20 },
});
export default TextInputMethod;
