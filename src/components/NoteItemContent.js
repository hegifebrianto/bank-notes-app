import React from 'react'
import { showFormattedDate } from '../data/Data'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function NoteItemContent({ id, title, body, createdAt }) {
  const obj = { id, title, body, createdAt }
  return (
    <div className="">
      <div className="card">
        <h3 className="header-item text-align-center height-200">
          <Link state={obj} to={`/notes/${id}`}><span className="title-item">{title}</span></Link>
          <br></br>
          <span className="body-item">{showFormattedDate(createdAt)}</span>
          <br></br>
          <span className="body-item">{body}</span>
        </h3>
      </div>
    </div>

  )
}


NoteItemContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  
};

export default NoteItemContent
