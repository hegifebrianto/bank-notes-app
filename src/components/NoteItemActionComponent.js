import React from 'react'

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {

    return (
        <div className='text-align-center'>
            <button
                type="button"
                className="btn btn-primary margin-5"
                id={id}
                onClick={() => onDeleteNote(id)}
                aria-label="Delete Button"
            >
                Delete
            </button>
            <button
                type="button"
                className="btn btn-primary archive-button margin-5"
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
