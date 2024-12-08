import React from 'react'
import NoteItem from './NoteItemComponent'
import { Container, Row, Col } from "reactstrap";

function NoteList({ notes, label, setNotes }) {

    return (
        <div>
            <h2 className='text-align-center'>{label}</h2>
            <Container>
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

export default NoteList
