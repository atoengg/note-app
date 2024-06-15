import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const EditNote = ({ setCurrentPage, editNote, currentNote }) => {

  const [title, setTitle] = useState(currentNote ? currentNote.title : "")
  const [desc, setDesc] = useState(currentNote ? currentNote.desc : "")

  return <View>
    <TextInput
      style={styles.input}
      placeholder="Title"
      value={title}
      onChangeText={setTitle}
    />
    <TextInput
      style={styles.input}
      placeholder="Description"
      value={desc}
      onChangeText={setDesc}
      multiline={true}
    />
    <Button
      title="Simpan"
      onPress={() => {
        editNote(currentNote.id, title, desc);
        setCurrentPage('home');
      }}
    />
    <Button
      title="Batal"
      onPress={() => setCurrentPage('home')}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
