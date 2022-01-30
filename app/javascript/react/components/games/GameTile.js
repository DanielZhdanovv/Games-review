import React, { cloneElement } from "react";
import { Link } from "react-router-dom";

const GameTile = (props) => {
	const { formData, setFormData } = props;
	return (
		<div className='product-card-thumbnail'>
			<Link to={`/games/${props.game.id}`}>
				<img
					className='index-image'
					src={props.game.thumbnail}
					alt='game logo image'
				></img>
				<div id='genre'>{props.game.genre}</div>
				<span className='product-card-desc'>{props.game.title}</span>
			</Link>
		</div>
	);
};

export default GameTile;
