import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteTiles from "./FavoriteTiles";
import PieChart from "./PieChart.js";

const UserHomePage = (props) => {
	const [user, setUser] = useState({});
	const [profilePhoto, setProfilePhoto] = useState({});
	const [favorites, setFavorites] = useState([]);
	const userId = props.match.params.id;
	const fetchUser = async () => {
		const response = await fetch(`/api/v1/users/${userId}`);
		const userData = await response.json();
		setUser(userData);
		setProfilePhoto(userData.profile_photo.url);
		setFavorites(userData.favorite_games);
	};

	useEffect(() => {
		fetchUser();
	}, []);
	console.log(user);
	let userImage = "";
	if (user.id) {
		userImage = profilePhoto;
	}
	const gamesTiles = favorites.map((game) => {
		return (
			<FavoriteTiles
				key={game.game.id}
				id={game.game.id}
				title={game.game.title}
				thumbnail={game.game.thumbnail}
				genre={game.game.genre}
			/>
		);
	});

	return (
		<div>
			<div className='main-container'>
				<div className='left-container'>
					<img className='user-image' src={profilePhoto} />
					<h1 className='user-name'>{user.first_name}</h1>
				</div>
				<div className='right-container'>
					<PieChart genre={favorites} />
				</div>
				<Link to={`/user/${user.id}`}>
					<img className='profile-image' src={userImage} />
				</Link>
			</div>
			<hr></hr>
			<h2 className='favorited'>Favorited Games:</h2>
			<div className='product-card'>{gamesTiles}</div>
		</div>
	);
};

export default UserHomePage;
