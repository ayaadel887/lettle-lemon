import { StyleSheet, View } from "react-native";
import LettelLemonHeader from "./Components/LettelLemonHeader";
import Footer from "./Components/Footer";
import WelcomeScreen from "./Components/WelcomeScreen";
import ScrollMenu from "./Components/ScrollMenu";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#495E57",
      }}
    >
      <LettelLemonHeader />
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
