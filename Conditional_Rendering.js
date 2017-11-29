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
switchNameHandler=(event)=>{
  
  let people=this.state.persons.filter((person)=>(person.name!=='Riship'))
  console.log(people)
  this.setState({
    persons:[...people,
    { name : 'Lovish' , age : 24 }
  ]
  })
}
onChangeHandler=(event)=>{
  let val =event.target.value
  this.setState({
    persons:[
      { name : val , age : '24' }
    ]
  })
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
      <button onClick={this.onToggle}> Switch name </button> 
      </div>
    );
  }
}

export default App;
