import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Sign In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInScreen;
