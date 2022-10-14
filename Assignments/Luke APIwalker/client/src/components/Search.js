import React, {useState, useEffect} from 'react'
import styles from './Search.module.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export const Search = (props) => {

    
    const [option,setOption] = useState('')
    const  [id,setId] = useState('')
    const navigate = useNavigate()
    
    
        
    const showMe = (e) => {
        e.preventDefault();
        
        
            if (option === 'People') {
                navigate('/people/' +id)
                
            } else if (option === 'Planets'){
                navigate('/planets/' + id)
                
            } else if (option === ''){
                navigate('/')
            } 
            
            if (option === 'Planets' && id > 60) {
                navigate('/error')
            } else if (option === 'People' && id > 83) {
                navigate('/error')
            }
            
            

        }
    
    return (
        <div>
            <form  onSubmit={showMe} className={styles.form}>
                <label  htmlFor='searchForResource'>Search for:</label>
                <select onChange={(e) => setOption(e.target.value)}  className= {styles.dropDown}>
                    <option></option>
                    <option>People</option>
                    <option>Planets</option>
                </select>
                <label htmlFor='searchForId'>ID:</label>
                <input value={id}  onChange = {(e) => setId(e.target.value)} type = 'text' />
                <input   id = {styles.submit} type='submit' value ='Submit' />
                
            </form>
        </div>
    )
}
