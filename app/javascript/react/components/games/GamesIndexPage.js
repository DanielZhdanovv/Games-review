import React from "react";
import { useState, useEffect } from "react";
import GameTile from "./GameTile";
const GamesIndexPage = (props) => {
	const [games, setGames] = useState([]);
	const [showMoreStatus, setShowMoreStatus] = useState(true);

	const fetchGames = async () => {
		const response = await fetch("/api/v1/games");
		const parsedGames = await response.json();
		setGames(parsedGames.data);
	};
	useEffect(() => {
		fetchGames();
	}, []);

	const toggleShowMore = (event) => {
		event.preventDefault();
		setShowMoreStatus(!showMoreStatus);
	};

	let gamesTiles;
	if (showMoreStatus) {
		gamesTiles = games.slice(0, 12).map((game) => {
			return (
				<GameTile
					key={game.id}
					id={game.id}
					title={game.title}
					thumbnail={game.thumbnail}
				/>
			);
		});
	} else {
		gamesTiles = games.map((game) => {
			return (
				<GameTile
					key={game.id}
					id={game.id}
					title={game.title}
					thumbnail={game.thumbnail}
				/>
			);
		});
	}

	return (
		<div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='product-card'>{gamesTiles}</div>
			<button onClick={toggleShowMore} className='show-more'>
				Load More
			</button>
		</div>
	);
};

export default GamesIndexPage;
