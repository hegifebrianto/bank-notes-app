import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailNotesPages() {
    const location = useLocation();
    const notes = location.state;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div>
            <div className='col width-400 card align-self-center text-align-center'>
                <h2>{notes.title}</h2>
                <p>Notes : {notes.createdAt}</p>
                
                <p>Notes : {notes.body}</p>
                <button className="text-align-center  btn btn-secondary margin-5" onClick={handleBack}>
                Back to Home
            </button>
            </div>
           
        </div>
    )
}
