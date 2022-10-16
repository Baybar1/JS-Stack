import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import styles from './RouteAppearance.module.css'
import { useNavigate } from 'react-router-dom'

export const People = () => {
    const navigate = useNavigate()
    const [people, setPeople] = useState('')
    const [getId, setGetId] = useState('')
    const [home,setHome] = useState('')
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then((response) => {
                setPeople(response.data)
                axios.get(response.data.homeworld)
                .then((response) => setHome(response.data))
                })
            
            
            .catch((error) => {
                if (error.response) {
                    navigate('*')
                }
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])



    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then((response) => {
                setGetId(response.data)


            })

    }, [id])

    
    


    let details = [];
    for (const property in getId) {
        details.push(
            <span key={property}>{property} : {getId[property]}</span>
        )
    }
    let results = details.slice(4, -8)

    return (

        <div>
            <h1>{people.name}</h1>
            <div className={styles.results}>
                {results}
                Homeworld: {home.name}
            </div>
            <div className={styles.link}>
            <a href= {people.homeworld}   target='blank'>Check Out my Homeworld</a>
            </div>
            
        </div>

    )
}
