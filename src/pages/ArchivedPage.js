import React, { useEffect, useState } from 'react';
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/BankNotesHeader';
import Body from '../components/BankNotesBody';

export default function ArchivedPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Access the notesArchive data passed via state
    console.log(location.state, 'asds');

    const [query, setQuery] = useState("");
    const [searchNotes, setSearchNotes] = useState([]);
    const [notes, setNotes] = useState(location.state);


    const notesAll = (searchNotes || notes).filter((note) => !note.archived);
    const notesArchive = (searchNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setSearchNotes(
            notes.filter((note) =>
                note.title.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, notes]);

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };
    return (
        <div className="">
            <Header noteSearch={setSearchNotes} setQuery={setQuery} />
            <button className="text-align-center float-right btn btn-secondary margin-5" onClick={handleBack}>
                Back to Home
            </button>
            <Body
                notesAll={notesAll}
                notesArchive={notesArchive}
                setNotes={setNotes}
                notesType={'noteArchived'}
            />

        </div>

    );
}
