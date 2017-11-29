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
    return (
      <div className="App">
       { showPersons ?
         persons.map(person=>(
          <Person name={person.name} age = {person.age}/>
        )) : null 
        }

      {/* <Person 
        name={persons[0].name} age ={persons[0].age}
       onChangeHandler={this.onChangeHandler}/> */}
      {/* <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} handler={this.switchNameHandler}/>
      <Person 
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/> */}
      <button onClick={this.onToggle}> Render on condition </button> 
      </div>
    );
  }
}

export default App;
