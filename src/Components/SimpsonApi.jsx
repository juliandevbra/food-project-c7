import React, { useEffect, useState } from 'react'

const SimpsonApi = () => {
    const [character, setCharacter] = useState({})
    const url = 'https://rickandmortyapi.com/api/character/2'

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url)
            let data = await response.json()
            setCharacter(data)
        }
        fetchData()
    }, [])

    console.log(character)

  return (
    <div>
        <h3>{character.name}</h3>
        <img src={character.image} alt="" />
    </div>
  )
}

export default SimpsonApi