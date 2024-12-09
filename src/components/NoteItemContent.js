import React from 'react'
import { showFormattedDate } from '../data/Data'

function NoteItemContent({ title, body, createdAt }) {
  return (
      <div className="">
        <div className="card">
          <h3 className="header-item text-align-center height-200">
            <span className="title-item">{title}</span>
            <br></br>
            <span className="body-item">{showFormattedDate(createdAt)}</span>
            <br></br>
            <span className="body-item">{body}</span>
          </h3>
        </div>
      </div>

  )
}

export default NoteItemContent
