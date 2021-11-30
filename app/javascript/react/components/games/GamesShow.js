import React, {useState, useEffect} from 'react'

const GamesShow = (props) => {
const [game, setGame] = useState([])

  const fetchGame = async () => {
    const response = await fetch(`/api/v1/games/${props.match.params.id}`)
    const parsedGames = await response.json()
    const arrayOfGames = JSON.parse(parsedGames.data)
    setGame(arrayOfGames)
    
  }

  useEffect(() => {
    fetchGame()
  }, [])

  return(
    <div>
          <p>{game.title}</p>
    </div>
  )
}

export default GamesShow