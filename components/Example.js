import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Example = () => {
  return (
    <View style={styles.screen}>
      <Text>Example component</Text>
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

export default Example;
