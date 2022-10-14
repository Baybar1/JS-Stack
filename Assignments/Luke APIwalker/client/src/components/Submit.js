import React, {useState,useEffect} from 'react'
import styles from './Search.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Submit = (props) => {
    
    const [getId,setGetId] = useState('')

    const navigate = useNavigate()

    const [people,setPeople] = useState('')

    const [planet,setPlanet] = useState('')

    const id1 = axios.get('https://swapi.dev/api/people').then(response => setGetId(response.data.url))
    const id2 = axios.get('https://swapi.dev/api/planets').then(response => setGetId(response.data.url))

    

    const getPeople =  useEffect (() => {
            axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                setPeople(response.data.results)
                
            })
        },[])
    
    

    
    const getPlanets = useEffect (() => {
        axios.get('https://swapi.dev/api/planets/')
        .then((response) => {
            setPlanet(response.data.results)
            
        })
        
    },[])


    const getData = () => {
        console.log('/people')
    }




    return (
        <div>
            <input   id = {styles.submit} type='submit' value ='Submit' />
        </div>
    )
}
