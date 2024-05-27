import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { MovieContext } from "./Context";  // Assuming MovieContext is a provider
import { StripeProvider } from "@stripe/stripe-react-native";

const App: React.FC = () => {
  return (
    <>
      <MovieContext>
        <StackNavigator />
        <StatusBar style="auto" />
      </MovieContext>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25
  },
});
