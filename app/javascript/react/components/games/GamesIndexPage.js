import React from 'react'
import { useState, useEffect } from 'react'
import GameTile from './GameTile'
const GamesIndexPage = (props) => {
	const [games, setGames] = useState([])

  const fetchGames = async () => {
    const response = await fetch("/api/v1/games")
    const parsedGames = await response.json()
    // debugger
    // const arrayOfGames = JSON.parse(parsedGames.data)
    setGames(parsedGames.data)
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
    <div className="grid-container text-center">
    <div className="grid-x grid-padding-x grid-margin-x align-center grid-padding-y">
		<div className="cell small-8">
			{gamesTiles}
		</div>
    </div>
    </div>
		
	)
}

export default GamesIndexPage