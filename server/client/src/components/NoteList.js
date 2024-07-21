import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
    
const NoteList = (props) => {

    return (
        <div>
            {props.people.map((note, idx) => {
                return <p key={idx}>
                    <h1>{note.firstName}</h1>
                    <h3>{note.lastName}</h3>

                    <Link to={"/notes/" + note._id}>
                        Edit
                    </Link>
                </p>
            })}
        </div>
    )
}
    
export default NoteList;
