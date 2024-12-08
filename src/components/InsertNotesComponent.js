import React, { useState } from 'react'
import Input from './InputComponent'

function InsertNotes({ setNotes }) {
    const [title, setTittle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [...notes, { id: (Math.random().parseInt), title: title, body: body, timestamp: timestamp, archived: false }]);
        setTittle("");
        setBody("");
    }


    return (
        <div className='row'>
            <div className='col align-self-center text-align-center'>
                <h2>Insert Bank Notes</h2>
                <form onSubmit={onSubmitHandler}>
                    <label>Bank Name:</label>
                    <label>Character left : {50 - title.length}</label>
                    <Input
                        value={title}
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Input Title ..."
                        required
                        onChange={setTittle}

                    />
                    <Input
                        value={body}
                        id="body"
                        name="body"
                        type="textarea"
                        placeholder="Write your bank notes here ..."
                        required
                        onChange={setBody}

                    />
                    <button
                        className="btn btn-primary "
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default InsertNotes
