import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LettelLemonHeader from "./Components/LettelLemonHeader";
import Footer from "./Components/Footer";
import WelcomeScreen from "./Components/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LettelLemonHeader />
      <WelcomeScreen />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
