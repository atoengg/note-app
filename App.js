import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { useState } from "react";
import { AddNote } from "./src/screens/AddNote";
import { EditNote } from "./src/screens/EditNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  showModal,
  editNote,
  setCurrentNote,
  currentNote
}) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} showModal={showModal} setCurrentNote={setCurrentNote}/>;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} currentNote={currentNote}/>;
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [noteList, setNoteList] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false)

  const [noteToDelete, setNoteToDelete] = useState(null)

  const [currentNote, setCurrentNote] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note => {
      if (note.id === id) {
        return { ...note, title, desc };
      }
      return note;
    });
    setNoteList(updatedNotes);
    setCurrentPage('home');
  };

  const deleteNote = (id) => {
    const newNoteList = noteList.filter(note => note.id != id)
    setNoteList(newNoteList)
    setIsModalVisible(false)
  }

  const showModal = (id) => {
    setNoteToDelete(id)
    setIsModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        deleteNote={deleteNote}
        showModal={showModal}
        editNote={editNote}
        setCurrentNote={setCurrentNote}
        currentNote={currentNote}
      />

      <Modal transparent={true} animationType="slide" visible={isModalVisible} onRequestClose={() => {
        setIsModalVisible(!isModalVisible)
      }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Apakah anda ingin menghapus note ini?</Text>
            <Text style={styles.modalButtons}>
              <Button title="Tidak" onPress={() => setIsModalVisible(false)} />
              <Button title="Iya" onPress={() => deleteNote(noteToDelete)} />
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },

});