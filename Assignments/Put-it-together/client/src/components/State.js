import React, {useState} from 'react'

export const State = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [state,setState] = useState(age);
    return (
        <div>
            <h1>{lastName},{firstName}</h1>
            <p>Age: {state}</p>
            <p>Hair Color: {hairColor}</p>
            
            <button onClick = { (event) => setState(state + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}
