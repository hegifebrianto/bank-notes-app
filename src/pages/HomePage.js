import React from 'react'
import Header from "../components/Header";
export default function HomePage({searchNote}) {
  return (
    <div className='bank-notes-header'>
        <h1 className='text-align-center'>Bank Notes Applications</h1>
        <Header searchNote={searchNote} />
      </div>
  )
}
