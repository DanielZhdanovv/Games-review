import React from 'react'
import {Link} from 'react-router-dom'

const GameTile = (props) => {

  return(
  <div className="product-card-thumbnail">
  <Link to={`/games/${props.id}`}>
    <img className="index-image" src={props.thumbnail} alt='game logo image'></img>
    <span className="product-card-desc">{props.title}</span>
    </Link>
    </div>

  )
}

export default GameTile