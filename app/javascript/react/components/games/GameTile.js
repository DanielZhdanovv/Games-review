import React from 'react'

const GameTile = (props) => {

  return(
    <div className="games-list">
    <p>{props.title}</p>
    <img src={props.thumbnail}></img>
    </div>

  )
}

export default GameTile