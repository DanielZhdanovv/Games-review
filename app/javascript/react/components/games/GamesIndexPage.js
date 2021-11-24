import React from 'react'
import { useState, useEffect } from 'react'

const GamesIndexPage = (props) => {
	const [games, setGames] = useState([])

  const fetchGames = async () => {
    const response = await fetch("/api/v1/games")
    const parsedGames = await response.json()
    setGames(parsedGames)
  }
  useEffect(() => {
    fetchGames()
  }, [])
	
	const gameTiles = games.data.map((games) => { 
    return (
          <div>
            key={games.id}
            games={games.title}
						</div>
          
      )
  })

	return(
		<div>
			{gameTiles}
		</div>
		
	)
}

export default GamesIndexPage