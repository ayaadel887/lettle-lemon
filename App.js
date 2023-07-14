import { StyleSheet, View } from "react-native";
import HeaderLemon from "./Components/HeaderLemon";
import Footer from "./Components/Footer";
// import WelcomeScreen from "./Components/WelcomeScreen";
import FlatListmenue from "./Components/FlatListmenue";
import MenueItem from "./Components/SectionListMenueItem";
import Frominput from "./Components/Frominput";
import FormKeaboard from "./Components/FormKeaboard";
import LoginScreen from "./Components/LoginScreen";
import TextInputMethod from "./Components/TextInputMethod";
import MenuItems from "./Components/presable";
import Pr from "./Components/Pr";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderLemon />
      <Pr />
      {/* <MenuItems /> */}
      {/* <TextInputMethod /> */}
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <FormKeaboard /> */}
      {/* <Frominput /> */}
      {/* <FlatListmenue />
      <MenueItem /> */}
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
