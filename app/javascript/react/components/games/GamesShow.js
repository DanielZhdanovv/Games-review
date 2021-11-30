import React, {useState, useEffect} from 'react'

const GamesShow = (props) => {
const [game, setGame] = useState([])

  const fetchGame = async () => {
    const response = await fetch(`/api/v1/games/${props.match.params.id}`)
    const parsedGames = await response.json()
    // debugger
    // const arrayOfGames = JSON.parse(parsedGames.data)
    setGame(parsedGames.data)
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