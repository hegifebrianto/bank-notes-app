import React from 'react'
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemActionComponent';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt, archived, action }) {
    const onDeleteNote = (item) => {
        action((notes) => notes.filter((note) => note.id !== item));
    };
    const onArchiveNote = (item) => {
        action((notes) =>
            notes.map((note) => {
                if (note.id === item) {
                    return { ...note, archived: !note.archived }
                }
                return note;
            })
        )
    }

    return (
        <div>
            <NoteItemContent
                id={id}
                title={title}
                body={body}
                createdAt={createdAt}
                archived={archived}
                action={action}
            />
            <NoteItemAction
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
                id={id}
                archived={archived}
            />
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired,
}

export default NoteItem
