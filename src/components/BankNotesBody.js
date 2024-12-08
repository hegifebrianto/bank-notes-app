import React from 'react'
import InsertNotes from './InsertNotesComponent'
import NoteList from "./NoteListComponent";
function Body({ notesAll, notesArchive, setNotes }) {
  // console.log('asd',notesArchive,setNotes);
  return (
      <div className="col align-self-center">
        <InsertNotes setNotes={setNotes} />
        <NoteList
          label="All Notes"
          setNotes={setNotes}
          notes={notesAll}
        />
        <NoteList
          label="Archive Notes"
          setNotes={setNotes}
          notes={notesArchive} />

      </div>
  )
}

export default Body
