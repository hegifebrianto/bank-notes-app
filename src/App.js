import React from 'react'
import { useEffect, useState } from "react";
import { getInitialData } from './data/Data'
import Header from './components/BankNotesHeader';
import Body from './components/BankNotesBody';
function App() {

  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div>
      <Header noteSearch={setSearchNotes} setQuery={setQuery} />
      <Body
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />



    </div>
  )
}

export default App
