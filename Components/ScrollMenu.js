import React from "react";

import { View, Text, ScrollView } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

const ScrollMenu = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white", fontSize: 40, flexWrap: "wrap" }}>
          View Menu
        </Text>
        <Text style={{ color: "#F4CE14", fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ScrollMenu;

{
  /*import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

const ScrollMenu = () => {
  const menuItem = [
    { name: "Hummus" },
    { name: "Moutabal" },
    { name: "Falafel" },
    // { name: "Marinated Olives" },
    // { name: "Kofta" },
    // { name: "Eggplant Salad" },
    // { name: "Lentil Burger" },
    // { name: "Smoked Salmon" },
    // { name: "Kofta Burger" },
    // { name: "Turkish Kebab" },
    // { name: "Fries" },
    // { name: "Buttered Rice" },
    // { name: "Bread Sticks" },
    // { name: "Pita Pocket" },
    // { name: "Lentil Soup" },
    // { name: "Greek Salad" },
    // { name: "Rice Pilaf" },
    // { name: "Baklava" },
    // { name: "Tartufo" },
    // { name: "Tiramisu" },
    // { name: "Panna Cotta" },
  ];
  // const menuItemsToDisplay = [
  //   "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
  // ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        indicatorStyle="white"
        horizontal={false}
        style={styles.scrollView}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          View Menu
        </Text>

        <View>
          {menuItem.map((item) => {
            <Text style={styles.text}>hi</Text>;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: "black",
  },
});

export default ScrollMenu;
 */
}
