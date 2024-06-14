import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components/CustomButton";

const NoteCard = ({ item, setCurrentPage, deleteNote, showModal }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>

    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {setCurrentPage('edit')}}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => showModal(item.id)}
      />
    </View>
  </View>
);

export const Home = ({ noteList, setCurrentPage, deleteNote, showModal }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => {setCurrentPage('add')}}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({item}) => (
          <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} showModal={showModal}/>
        )}
        keyExtractor={(item) => item.id}
      />
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
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
