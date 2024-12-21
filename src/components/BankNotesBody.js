import React from 'react'
import InsertNotes from './InsertNotesComponent'
import NoteList from "./NoteListComponent";
import PropTypes from 'prop-types';
function Body({ notesAll, notesArchive, setNotes,notesType }) {
  return (
      <div className="col align-self-center">
        <InsertNotes setNotes={setNotes} />
        {notesType === 'noteList' ? (<>
          <NoteList
          label="All Notes"
          setNotes={setNotes}
          notes={notesAll}
        />
        </>):(<>
          <NoteList
          label="Archive Notes"
          setNotes={setNotes}
          notes={notesArchive} />
        </>)}

      

      </div>
  )
}
Body.propTypes  = {
notesAll : PropTypes.array.isRequired,
notesArchive :PropTypes.array.isRequired,
setNotes:PropTypes.func.isRequired,
notesType :PropTypes.string.isRequired
}


export default Body
