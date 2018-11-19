import React from "react";

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and i am {props.age}yo, with {Math.floor(Math.random() * 11)} marbles on me. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>  
    )
};

export default person;