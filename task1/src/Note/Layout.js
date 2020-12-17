import React from 'react';
import './Layout.css'

const layout = (props) =>{
    return(
        
    <div>
        <div className='Task'>
            My Tasks
        </div>
        <input className='Input' id='input' type='text'  onChange={props.addText} placeholder='Enter your task.... '/>
        <button className='Button' onClick={props.addNote}>{props.children}</button>
        
    </div>
    )
}

export default layout;