import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
    { name : 'Jatin' , age : 26 },
    { name : 'Riship' , age : 26 },
    { name : 'Amit' , age : 28 }
  ],
  showPersons:true
}

onToggle=()=>{
  const show=this.state.showPersons;
  this.setState({
    showPersons : !show
  });
}
  render() {
    const { persons, showPersons } = this.state;
    let showCase = null;
    if(showPersons){
     showCase  =  (
          persons.map(person=>(
            <Person name={person.name} age = {person.age}/>
          )
        )
      )
    }
    return (
      <div className="App">
      {showCase}
      <button onClick={this.onToggle}> Render Conditinally </button> 
      </div>
    );
  }
}

export default App;
