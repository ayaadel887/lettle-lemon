import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!login && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={onChangepassword}
          />
          <Pressable onPress={() => setLogin(!login)} style={styles.btn}>
            <Text style={styles.btntxt}> Log In</Text>
          </Pressable>
        </>
      )}

      {login && (
        <View>
          <Text style={styles.txt}> You are now Login</Text>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  btn: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  btntxt: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
  },
  txt: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 28,
  },
});
export default LoginScreen;
