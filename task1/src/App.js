import './App.css';
import Notes from './Note/Notes';
import React, { Component } from 'react';
import Layout from './Note/Layout';

class App extends Component {

  state = {
    text : '',
    notes : []
  }

  createTextHandler = (event) =>{
    this.setState({text:event.target.value})
  }


  rearangeNotesHandler = (tempnotes) =>{
    let id = 0
    

    tempnotes.forEach((list)=>{
      list['id']=id++;
    })
    this.setState({notes:tempnotes})
  }

  createNoteHandler = () =>{
    
    let newobj = {}
      newobj['id'] =this.state.notes.length ;
      newobj['title'] =this.state.text;
      newobj['check'] =false
    
      let newNotes =[...this.state.notes, newobj]

    this.setState({
      text:'',
      notes:newNotes
    })
    let inputfield = document.getElementById('input');
    inputfield.value = '';
  }

  checkHandler = (event) =>{
    let fullid = event.target.id;
    let changeid =Number( fullid.slice(-1))
    let tempnotes = [...this.state.notes]
    
    tempnotes.forEach((list)=>{
      if(list['id'  ] === changeid){
        list['check'] = !list['check']
      }
    })
    this.setState({notes : tempnotes})
    this.rearangeNotesHandler(tempnotes)
  }

  deleteHandler = (event) =>{
    let fullid = event.target.id;
    let changeid =Number( fullid.slice(-1))
    let tempnotes = [...this.state.notes]
    
    tempnotes.splice(changeid,1)
    this.setState({notes : tempnotes})
    this.rearangeNotesHandler(tempnotes)
    
  }
  
  editHandler = (event) =>{
    let fullid = event.target.id;
    let changeid =Number( fullid.slice(-1))
    let tempnotes = [...this.state.notes]
    let edittext;
    tempnotes.forEach((list)=>{
      if(list['id'  ] === changeid){
        edittext = list['title']
      }
    })
    tempnotes.splice(changeid,1)
    document.getElementById('input').value = edittext
    
    this.setState({text : edittext,notes : tempnotes})
    this.rearangeNotesHandler(tempnotes)
  }

  render(){

  return (
    <div className="App">
      <Layout addText={this.createTextHandler} addNote={this.createNoteHandler} text={this.state.text}>Add A Note</Layout>
      <Notes notes={this.state.notes} check = {this.checkHandler} delete = {this.deleteHandler} edit={this.editHandler}></Notes>
    </div>
  );
  }
}

export default App;
