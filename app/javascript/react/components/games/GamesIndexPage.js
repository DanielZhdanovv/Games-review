import React from "react";
import { useState, useEffect } from "react";
import GameTile from "./GameTile";
import Search from "./Search";
import { Link } from "react-router-dom";
const GamesIndexPage = (props) => {
	const [games, setGames] = useState([]);
	const [showMoreStatus, setShowMoreStatus] = useState(true);
	const [search, setSearch] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [user, setUser] = useState({});
	const [userPhoto, setUserPhoto] = useState("");

	const fetchGames = async () => {
		const response = await fetch("/api/v1/games");
		const parsedGames = await response.json();
		setGames(parsedGames.data);
		setSearchResults(parsedGames.data);
	};

	const fetchUser = async () => {
		const response = await fetch(`/api/v1/users/`);
		const userData = await response.json();
		if (userData) {
			setUser(userData);
			setUserPhoto(userData.profile_photo.url);
		}
	};

	useEffect(() => {
		fetchGames();
		fetchUser();
	}, []);

	let userImage = userPhoto;
	if (userPhoto === null) {
		userImage =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg";
	}
	const toggleShowMore = (event) => {
		event.preventDefault();
		setShowMoreStatus(!showMoreStatus);
	};

	let gameTiles;
	if (showMoreStatus) {
		gameTiles = searchResults.slice(0, 12).map((game) => {
			return (
				<div key={game.id}>
					<GameTile game={game} />
				</div>
			);
		});
	} else {
		gameTiles = searchResults.map((game) => {
			return (
				<div key={game.id}>
					<GameTile game={game} />
				</div>
			);
		});
	}

	let array = games;

	const searchHandler = (search) => {
		setSearch(search);
		if (search !== "") {
			const newGameList = array.filter((game) => {
				return Object.values(game)
					.join(" ")
					.toLowerCase()
					.includes(search.toLowerCase());
			});
			setSearchResults(newGameList);
		} else array;
	};

	return (
		<div>
			<Link to={`/user/${user.id}`}>
				<img className='profile-image' src={userImage} />
			</Link>
			<div className='row expanded collapse'>
				<div className='column'>
					<div className='large-article-header'>
						<div className='large-article-header-content'>
							<div className='center-container'>
								<div className='article-date'>
									<p>Created by Daniel Zhdanov</p>
								</div>
								<div className='article-title'>
									<h1>
										Every Free Game You Would <strong>EVER</strong> Need
									</h1>
								</div>
								<Search
									className='search'
									term={search}
									searchKeyword={searchHandler}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='product-card'>{gameTiles}</div>
			<button onClick={toggleShowMore} className='show-more'>
				Load More
			</button>
		</div>
	);
};

export default GamesIndexPage;
