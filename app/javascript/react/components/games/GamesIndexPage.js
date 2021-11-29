import React from 'react'
import { useState, useEffect } from 'react'
import GameTile from './GameTile'
const GamesIndexPage = (props) => {
	const [games, setGames] = useState([])

  const fetchGames = async () => {
    const response = await fetch("/api/v1/games")
    const parsedGames = await response.json()
    const arrayOfGames = JSON.parse(parsedGames.data)
    setGames(arrayOfGames)
  }
  useEffect(() => {
    fetchGames()
  }, [])

  const gamesTiles = games.map((game) => {
    return (
      <GameTile
        key={game.id}
        id={game.id}
        title={game.title}
        thumbnail={game.thumbnail}
        
      />
    )
  })

	return(
		<div>
			{gamesTiles}
		</div>
		
	)
}

export default GamesIndexPage