import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styles from './Planets.module.css'

export const Planets = (props) => {
    const [planet,setPlanet] = useState('')
    const [id,setId] = useState('')
    const navigate = useNavigate()
    

    useEffect (() => {
        axios.get('https://swapi.dev/api/planets')
        .then((response) => {
            setPlanet(response.data.results)
            console.log(response)
        })
        
    },[])

    const seeDetails = (id) => {
        setId('https://swapi.dev/api/planets/?search=' + id)
        console.log(id)
        navigate('/info/' + id)
    }


    return (
        <div className={styles.planets}>
            {
                planet.length && planet.map((planet,index) => {
                    return (
                        <div className={styles.cards} key = {index}>
                            <p>{planet.name}</p>
                            <button  onClick={() => seeDetails(planet.name)}>Details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
