import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteTiles from "./FavoriteTiles"

const UserHomePage = (props) => {
	const [user, setUser] = useState({});
	const [profilePhoto, setProfilePhoto] = useState({});
	const [favorites, setFavorites] = useState([]);

	const fetchUser = async () => {
		const response = await fetch("/api/v1/users/");
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
        key={game.id}
				id={game.game.id}
        title={game.game.title}
        thumbnail={game.game.thumbnail}

      />
    )
  })

	return (
		<div>
			<Link to={`/user/${user.id}`}>
				<img className='profile-image' src={userImage} />
			</Link>
			<div className='product-card'>{gamesTiles}</div>
		</div>
	);
};


export default UserHomePage;
