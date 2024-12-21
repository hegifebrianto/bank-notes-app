import React from 'react'
import PropTypes from 'prop-types';
import NoteItem from './NoteItemComponent';

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {

    return (
        <div className='text-align-center card'>
            <button
                type="button"
                className="btn btn-secondary margin-5"
                id={id}
                onClick={() => onDeleteNote(id)}
                aria-label="Delete Button"
            >
                Delete
            </button>
            <button
                type="button"
                className="btn btn-secondary archive-button margin-5"
                id={id}
                onClick={() => onArchiveNote(id)}
                aria-label='Archive Button'
            >
                {archived? <span>Kembali ke List</span>:<span>Archived</span>}
            </button>
        </div>
    )

}

NoteItemAction.propTypes  = {
    onDeleteNote: PropTypes.func.isRequired,
    onArchiveNote: PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    archived:PropTypes.bool.isRequired
}

export default NoteItemAction
