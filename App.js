import { StyleSheet, View } from "react-native";
import HeaderLemon from "./Components/HeaderLemon";
import Footer from "./Components/Footer";
import WelcomeScreen from "./Components/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderLemon />
      <WelcomeScreen />
      <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#495E57",
  },
});
