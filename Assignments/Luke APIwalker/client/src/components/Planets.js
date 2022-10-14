import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './RouteAppearance.module.css'

export const Planets = (props) => {
    const {id} = useParams();
    const [planet,setPlanet] = useState('')
    const [getId, setGetId] = useState('')

    useEffect (() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        .then((response) => {
            setPlanet(response.data)
            console.log(response)
        })
        
    },[id])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
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
    let results = details.slice(4,-6)
    
    return (
        <div>
            <h1>{planet.name}</h1>
            <div className={styles.results}>
                {results}
            </div>
        </div>
    )
}
