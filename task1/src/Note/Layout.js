import React from 'react';
import './Layout.css'

const layout = (props) =>{
    return(
        
    <div>

        <input className='Input' id='input' type='text'  onChange={props.addText}/>
        <button className='Button' onClick={props.addNote}>{props.children}</button>
        
    </div>
    )
}

export default layout;