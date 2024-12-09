import React, { useState } from 'react'
import Input from './InputComponent'

function InsertNotes({ setNotes }) {
    const [title, setTittle] = useState("");
    const [body, setBody] = useState("");
    const convertDateToInteger = (date) => {
        // Ensure the date is a valid Date object
        if (!(date instanceof Date)) {
            throw new Error("Invalid input: not a Date object");
        }

        // Convert the date to milliseconds since the Unix epoch (January 1, 1970)
        return date.getTime();
    };
    const currentDate = new Date();  // Current date and time
    const dateAsInteger = convertDateToInteger(currentDate);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [...notes, { id: dateAsInteger, title: title, body: body, timestamp: timestamp, archived: false }]);
        setTittle("");
        setBody("");
    }


    return (
        <div className='row'>
            <div className='col align-self-center text-align-center'>
                <h2>Insert Notes</h2>
                <form onSubmit={onSubmitHandler}>
                    <label>Bank Name:</label>
                    <label>Character left : {50 - title.length}</label>
                    <Input
                        value={title}
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Input Notes here ..."
                        required
                        onChange={setTittle}

                    />
                    <Input
                        value={body}
                        id="body"
                        name="body"
                        type="textarea"
                        placeholder="Write your notes here ..."
                        required
                        onChange={setBody}

                    />
                    <button
                            className="btn btn-secondary width-400"
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
