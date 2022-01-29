import React from 'react'
import {Link} from 'react-router-dom'

const FavoriteTiles = (props) => {


    return (
      <div className='product-card-thumbnail'>
        <Link to={`/games/${props.id}`}>
          <img
            className='index-image'
            src={props.thumbnail}
            alt='game logo image'
          ></img>
          <div id='genre'>{props.genre}</div>
          <span className='product-card-desc'>{props.title}</span>
        </Link>
      </div>
    );
  };

export default FavoriteTiles