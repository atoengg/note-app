import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { CustomButton } from "../components/CustomButton";

export const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />

      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />

      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage("home");
          }}
        />
      </View>

      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});
