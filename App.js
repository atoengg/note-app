import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { useState } from "react";
import { AddNote } from "./src/screens/AddNote";
import { EditNote } from "./src/screens/EditNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
}) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote />;
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [noteList, setNoteList] = useState([]);

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

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 40,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
