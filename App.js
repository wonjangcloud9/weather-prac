import { StatusBar } from "expo-status-bar";
import reactDom from "react-dom";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 3, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
