import { StyleSheet, View } from "react-native";
import HeaderLemon from "./Components/HeaderLemon";
import Footer from "./Components/Footer";
// import WelcomeScreen from "./Components/WelcomeScreen";
import FlatListmenue from "./Components/FlatListmenue";
import MenueItem from "./Components/SectionListMenueItem";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderLemon />
      {/* <WelcomeScreen /> */}
      <FlatListmenue />
      <MenueItem />
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
