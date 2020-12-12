import React, {Component} from 'react';
import './Button.css';
class Check extends Component{


    render(){
        

        return(
            
            <input className='CkeckButton' type='checkbox' id = {this.props.id} onChange={this.props.check} checked={this.props.checked}/>
            
            
        );
    }
}

export default Check;