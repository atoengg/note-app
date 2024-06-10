import React from "react";
import { StyleSheet, Text } from "react-native";

export const EditNote = () => {
  return <Text style={styles.container}>Ubah Note</Text>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
});
