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
        // axios.get(response.data.results[0].url)
        // .then((response) => {setGetPeople(response.data.url)})    
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

    
    


    let residentList = info.length && info.map((info,index) => {
        return (
            <div className={styles.keys} key = {index}>
                
                
                {
                    Object.keys(info).map((key,i) =>  {
                        
                            if (key === 'residents' || key === 'films' ) {
                                return    <span  key = {key + i}>{key} : <ul> {info[key].map((item,num) => <li key = {key+num}><a href ={item} target = 'blank'>{item}</a></li>)}</ul> </span>
                            } else if (key === 'url') {
                                return <p  className={styles.lines} key = {key+i}> {key}: <ul><li><a href ={info[key]}>{info[key]}</a></li></ul> </p>
                            } else {
                                return <p  className={styles.lines} key = {key+i}> {key}: {info[key]} </p>
                            }
                            
                        
                        
                        // key === 'residents' || key === 'films' ? <ul>{key} <li>{info[key]}</li></ul> :  <p  className={styles.lines} key = {index}> {key}: {info[key]} </p>
                        })
                }
                {/* <a className={styles.click} href = {getPeople} target = 'blank'>Residents</a> */}
                
            </div>
        )
    })



    
    return (
        <div className= {styles.container}>
            
                {residentList}
                
            
            
            
        </div>
    )
}
