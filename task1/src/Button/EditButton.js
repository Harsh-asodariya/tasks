import React, {Component} from 'react';
import './Button.css';

class EditButton extends Component{
    render(){
        return(
            <button 
                className={'EditButton'} 
                id={this.props.id} 
                onClick={this.props.edit}
                disabled={this.props.checked ? true : false}>Edit</button>
        );
    }
}

export default EditButton;