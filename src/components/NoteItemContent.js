import React from 'react'

function NoteItemContent({ title, body, createAt }) {
  return (
      <div className="">
        <div className="note-item">
          <h3 className="header-item text-align-center">
            <span className="title-item">{title}</span>
            <br></br>
            <span className="date-item">{createAt}</span>
            <span className="body-item">{body}</span>
          </h3>
        </div>
      </div>

  )
}

export default NoteItemContent
