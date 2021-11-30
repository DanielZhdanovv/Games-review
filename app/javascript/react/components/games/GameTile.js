import React from 'react'
import {Link} from 'react-router-dom'

const GameTile = (props) => {

  return(
    <Link to={`/games/${props.id}`}>
    <div className="games-list">
    <p>{props.title}</p>
    <img src={props.thumbnail} alt='game logo image'></img>
    </div>
    </Link>

  )
}

export default GameTile