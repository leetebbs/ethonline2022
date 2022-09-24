import React from 'react'
import { useCharacters } from '../hooks/useCharacters'

export default function CharactersList() {
const {error, loading, data} = useCharacters()
if(loading){
    return <div>Loading...</div>
}
    console.log({error, loading, data})

  return (
    <div className="charactersList">
        {data.characters.results.map(character => {
            return <div>
                <img src={character.image}></img>
                <h2>{character.name}</h2>
            </div>
        })}
    </div>
  )
}
