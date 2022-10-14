import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './RouteAppearance.module.css'

export const People = (props) => {
    const [people, setPeople] = useState('')
    const [getId, setGetId] = useState('')
    const {id} = useParams();
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then((response) => {
                setPeople(response.data)
                console.log(response)
            })

    }, [id])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then((response) => {
                setGetId(response.data)
                console.log(response)
                
            })

    }, [id])

    let details = [];
    for (const property in getId) {
        details.push(
            <p>
                {property} : {getId[property]}
            </p>
        )
    }
    let results = details.slice(4,-8)
    
    return (

        <div>
            <h1>{people.name}</h1>
            <div className={styles.results}>
            <p>{results}</p>
                
                
            </div>
            
        </div>
            
    )
}
