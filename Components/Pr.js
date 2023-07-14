import React, { useState } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import MenueItem from "./SectionListMenueItem";

const Pr = () => {
  const [shoeMenue, setShowMenue] = useState(false);
  const menuItemsToDisplay = [
    {
      title: "Appetizers",
      data: [
        "Hummus",
        "Moutabal",
        "Falafel",
        "Marinated Olives",
        "Kofta",
        "Eggplant Salad",
      ],
    },
    {
      title: "Main Dishes",
      data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
    },
    {
      title: "Sides",
      data: [
        "Fries",
        "Buttered Rice",
        "Bread Sticks",
        "Pita Pocket",
        "Lentil Soup",
        "Greek Salad",
        "Rice Pilaf",
      ],
    },
    {
      title: "Desserts",
      data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
    },
  ];
  const Item = ({ ibrahim }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{ibrahim}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item ibrahim={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title} </Text>
  );
  const Separator = () => <View style={styles.separator} />;

  const Footer = () => (
    <Text style={styles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. View our menu
        to explore our cuisine with daily specials!
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => {
          setShowMenue(!shoeMenue);
        }}
      >
        <Text style={styles.btntext}>
          {shoeMenue ? "Hide menu" : "show menu"}
        </Text>
      </Pressable>
      {shoeMenue && (
        <View>
          <SectionList
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={Footer}
            ItemSeparatorComponent={Separator}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  text: {
    backgroundColor: "red",
    fontSize: 18,
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  btn: { backgroundColor: "#EDEFEE", borderRadius: 20, margin: 20 },
  btntext: {
    color: "#333333",
    fontSize: 18,
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
export default Pr;
