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
	


	return(
		<div>
			{games.data}
		</div>
		
	)
}

export default GamesIndexPage