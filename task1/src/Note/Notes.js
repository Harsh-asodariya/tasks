import React from 'react';
import Note from './note';
import './note.css';
 
const notes = (props) =>{
    return(
    <div className='Notes'>
        {
            props.notes.map((list, i)=>(
               <Note 
                note={list} 
                key={i}
                id = {list.id}
                check = {props.check}
                delete = {props.delete}
                edit = {props.edit}
                /> 
            ))
        }
    </div>
    )
}

export default notes;