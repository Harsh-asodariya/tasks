import React, {Component} from 'react';
import './Button.css';

class DeleteButton extends Component{
    render(){
        return(
           
            <button 
                className='DeleteButton' 
                id={this.props.id} 
                onClick={this.props.delete} 
                disabled={this.props.checked ? true : false}>Delete</button>
          
        );
    }
}

export default DeleteButton;