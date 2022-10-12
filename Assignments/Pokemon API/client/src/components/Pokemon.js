import React , {useState, useEffect}from 'react'
import styles from './Pokemon.module.css'

export const Pokemon = () => {
    const [pokemon,setPokemon] = useState('');

    useEffect (() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=347')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            console.log(setPokemon)
    }, []);
    return (
        <div>
            <h1>Pokemon</h1>
            <div className = {styles.container}>
            {
                pokemon.length > 0 && pokemon.map((pokemon,index) => {
                    return (<div className ={styles.pokemon} key = {index}>
                    <ul className={styles.list}>

                        <li>{pokemon.name}</li>
                    </ul>
                        </div>)
                })
            }
            </div>
        </div>
    )
}
