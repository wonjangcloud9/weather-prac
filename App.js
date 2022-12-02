import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "red",
          fontSize: 30,
        }}
      >
        Hello, I'm Wonjang
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
