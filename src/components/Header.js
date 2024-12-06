
import React from "react";
import NoteSearch from "./NoteSearch";
export default function Header({searchNote}) {
  return (
    <div>
       <NoteSearch searchNote={searchNote} />
    </div>
  )
}


