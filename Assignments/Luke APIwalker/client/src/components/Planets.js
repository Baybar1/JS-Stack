import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './RouteAppearance.module.css'
import {useNavigate} from 'react-router-dom'

export const Planets = (props) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [planet,setPlanet] = useState('')
    const [getId, setGetId] = useState('')

    useEffect (() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        .then((response) => {
            setPlanet(response.data)
            
            
        })
        .catch((error) => {
            if(error.response) {
                navigate('*')
            }
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])


    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then((response) => {
                setGetId(response.data)
                
                
            })

    }, [id])


    let details = [];
    for (const property in getId) {
        details.push(
            <span key ={property}>{property} : {getId[property]}</span>
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
