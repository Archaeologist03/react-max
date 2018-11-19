import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Ilija", age: 23},
      {name: "X", age: 33}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "X", age: 333}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Ilija", age: 23},
        {name: event.target.value, age: 33}
      ]
    })    
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }


    return (
      <div className="App">
        <h1>Hi from React!</h1>

        <button
          style={style}
          onClick={ () => this.switchNameHandler("Ixilirian")}>Switch Name</button>

        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "IXXX!")}
         />        
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>
        And I am god.</Person>
      </div>
    );
  // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi from React!!!!!") );

  }
}

export default App;
