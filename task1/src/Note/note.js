import React from 'react';
import './note.css';
import DeleteButton from '../Button/DeleteButton';
import EditButton from '../Button/EditButton';
import Check from '../Button/Check'

const note = (props) =>{


    let textid='text'+props.id;
    let editid = 'edit'+props.id;
    let deleteid = 'delete'+props.id;
    let checkid = 'check'+props.id;

    return(
    <div className='Note'>
         <p className='Text' id={textid} style={{textDecoration: props.note.check ? 'line-through' : 'none'}}>{props.note.title}</p>
        <Check id={checkid
        } textid={textid} checked={props.note.check} check = {props.check}/>
        <EditButton id={editid} edit = {props.edit}/>
        <DeleteButton id={deleteid} delete={props.delete}/>
        
    </div>
    )
}

export default note;