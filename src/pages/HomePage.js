import React from 'react'
import { useEffect, useState } from "react";
import Header from '../components/BankNotesHeader';
import Body from '../components/BankNotesBody';
import { getInitialData } from '../data/Data';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


export default function HomePage() {



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

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `archived`;
    navigate(path, { state: notesArchive });
  }

  

  return (
    <div className="">
      <Header noteSearch={setSearchNotes} setQuery={setQuery} />
      <button className="text-align-center float-right btn btn-secondary margin-5" onClick={routeChange}>
        Archived
      </button>
      <Body
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
        notesType={'noteList'}
      />
    </div>
  )
}
