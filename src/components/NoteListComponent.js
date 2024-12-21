import React from 'react'
import NoteItem from './NoteItemComponent'
import { Container, Row, Col } from "reactstrap";
import PropTypes from 'prop-types';

function NoteList({ notes, label, setNotes }) {
    return (
        <div className='note-app-header-all-notes'>
            <h2 className='text-align-center border-bottom-1 '>{label}</h2>
            <Container className='margin-top-10'>
                <Row>
                    {notes.length === 0 ? <p className="text-align-center">Notes is empty</p>
                        : notes.map((note) => (
                            <Col key={note.id} md="4">
                                <NoteItem action={setNotes} key={note.id} {...note} />
                            </Col>
                        ))}
                </Row>
            </Container>


        </div>

    )
}
NoteList.propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
      })),
   label:PropTypes.string.isRequired,
   setNotes:PropTypes.func.isRequired
  };


export default NoteList
