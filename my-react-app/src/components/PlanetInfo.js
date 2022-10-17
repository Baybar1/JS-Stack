import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import styles from './PlanetInfo.module.css'

export const PlanetInfo = () => {
    const [info,setInfo] = useState('')
    const [getPeople,setGetPeople] = useState('')
    const [people,setPeople] = useState('')
    const {id} = useParams()
    

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/?search=' + id)
        .then((response) => {
            setInfo(response.data.results)
        axios.get(response.data.results[0].url)
        .then((response) => {setGetPeople(response.data.url)})    
        // console.log(getPeople)
        })
    },[])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then((response) => {
            setPeople(response.data.results)
            console.log(response)
        })
        
        
    },[])
    
    
    return (
        <div className= {styles.container}>
            {
                info.length && info.map((info,index) => {
                    return (
                        <div className={styles.keys} key = {index}>
                            
                            
                            {
                                Object.keys(info).filter(key => key !== 'residents' && key !== 'films').map((key,index) => ( 
                                    
                                    <p  className={styles.lines} key = {index}>{key}: {info[key]} </p>
                                    
                                ))
                            }
                            <a className={styles.click} href = {getPeople} target = 'blank'>Residents</a>
                            
                        </div>
                    )
                })
                
            }
            
            
        </div>
    )
}
