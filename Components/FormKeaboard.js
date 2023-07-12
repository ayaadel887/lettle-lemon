import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

const FormKeaboard = () => {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView keyboardDismissMode="on-drag">
          <TextInput style={styles.textinput}></TextInput>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
});
export default FormKeaboard;
