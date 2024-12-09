import React from 'react'

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

export default NoteItemAction
