import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './Poke.module.css'
export const Poke = () => {
    const [poke,setPoke] = useState('')
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=347')
            .then(response => response.json())
            .then(response => setPoke(response.results))
    }, []);
    return (
        <div>
            <h1>Poke</h1>
            <div className = {styles.container}>
            {
                poke.length > 0 && poke.map((poke,index) => {
                    return (<div className ={styles.pokemon} key = {index}>
                    <ul className={styles.list}>

                        <li>{poke.name}</li>
                    </ul>
                        </div>)
                })
            }
            </div>
        </div>
    )
}
