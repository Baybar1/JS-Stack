import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Pokemon = () => {
    const [pokemon,setPokemon] = useState('')

    useEffect (() => {

    
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=347')
        .then((response) => {
            console.log(response)
            setPokemon(response.data.results)
        })
    }, []);
    return (
        <div>
            Pokemon
            {
                pokemon.length > 0 && pokemon.map((pokemon,index) => {
                    return(<div key = {index}> {pokemon.name}</div>)
                })
            }
            
        </div>
    )
}
