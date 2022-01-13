import React, { useState, useEffect } from "react";
import helperFetch from "../helpers/Fetcher.js";
import ReviewForm from "./ReviewsForm.js";
import ReviewTiles from "./ReviewTiles.js";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const GamesShow = (props) => {
	const [game, setGame] = useState({});
	const [reviews, setReviews] = useState([]);
	const [user, setUser] = useState({});
	const [gameDescription, setGameDescription] = useState(false);
	const [reviewNumber, setReviewNumber] = useState("");
	const gameId = props.match.params.id;
	const [formData, setFormData] = useState({
		rating: "",
		body: "",
		game_id: gameId,
	});
	useEffect(() => {
		helperFetch(`/api/v1/games/${gameId}`).then((gameData) => {
			setGame(gameData);
			if (gameData.reviews) {
				setReviews(gameData.reviews);
				setReviewNumber(gameData.reviews.length);
			}
		});
		helperFetch("/api/v1/users").then((userData) => {
			if (userData) {
				setUser(userData);
			}
		});
	}, []);

	const addNewReview = async (formPayload) => {
		try {
			const response = await fetch("/api/v1/reviews", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				credentials: "same-origin",
				body: JSON.stringify(formPayload),
			});
			if (!response.ok) {
				const errorMessage = `${response.status} ${response.statusText}`;
				throw new Error(errorMessage);
			}
			const newReview = await response.json();
			if (newReview.errors) {
				alert(newReview.errors);
			} else {
				setReviews([...reviews, newReview]);
			}

			setFormData({
				rating: "",
				body: "",
				game_id: gameId,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const updateReview = (index) => {
		setReviews(
			reviews.slice(0, index).concat(reviews.slice(index + 1, reviews.lenght))
		);
	};
	const deleteReview = (id, position) => {
		fetch(`/api/v1/reviews/${id}`, { method: "DELETE" }).then(() =>
			updateReview(position)
		);
	};

	const reviewTiles = reviews.map((review, index) => {
		return (
			<ReviewTiles
				key={review.id}
				review={review}
				user={review.user}
				position={index}
				updateReview={updateReview}
				deleteReview={deleteReview}
				currentUser={user}
			/>
		);
	});

	let createReviews;
	if (user) {
		createReviews = (
			<ReviewForm
				addNewReview={addNewReview}
				formData={formData}
				setFormData={setFormData}
			/>
		);
	}
	console.log(game);
	const descriptionButton = (event) => {
		event.preventDefault();
		setGameDescription(!gameDescription);
	};

	let toggleDescription = game.description;

	// if (gameDescription === false) {
	//   toggleDescription = toggleDescription.slice(0, 200)
	//   }else {
	//     toggleDescription
	//   }

	return (
		<div className='q1'>
			<div className='left'>
				{" "}
				<img src={game.thumbnail} />{" "}
				<div>
					<a href={game.game_url} target='_blank'>
						{" "}
						Play Now{" "}
					</a>
					<h4>Favorite</h4>
				</div>
			</div>
			<div className='right'>
				{" "}
				<h1>{game.title}</h1>
				<p> {reviewNumber} Comments</p> <p>3 Favorite</p>
				<p>{game.description}</p>
				<div className='info'>
					<h2>Aditional information</h2>
				</div>
				<div className='row-flex'>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Title</strong>
						</span>
						<p>{game.title}</p>
					</div>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Developer</strong>
						</span>
						<p>{game.developer}</p>
					</div>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Publisher</strong>
						</span>
						<p>{game.publisher}</p>
					</div>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Release Date</strong>
						</span>
						<p>{game.release_date}</p>
					</div>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Genre</strong>
						</span>
						<p>{game.genre}</p>
					</div>
					<div className='col-6 col-md-4'>
						<span>
							<strong>Platform</strong>
						</span>
						<p>{game.platform}</p>
					</div>
				</div>
				<h3>{game.title} Screenshots</h3>
				<div className='row-flex'>
					<div className='col-6 col-md-4'>
						<img className='image' src={game.screenshot1} alt='hey'></img>
					</div>
					<div className='col-6 col-md-4'>
						<img className='image' src={game.screenshot2} alt='hey'></img>
					</div>
					<div className='col-6 col-md-4'>
						<img className='image' src={game.screenshot3} alt='hey'></img>
					</div>
					<h3>Minimum System Requirements</h3>
					<div className='row-flex'>
						<div className='col-6 col-md-4'>
							<span>
								<strong>OS</strong>
							</span>
							<p>{game.title}</p>
						</div>
						<div className='col-6 col-md-4'>
							<span>
								<strong>Graphics</strong>
							</span>
							<p>{game.developer}</p>
						</div>
						<div className='col-6 col-md-4'>
							<span>
								<strong>Publisher</strong>
							</span>
							<p>{game.publisher}</p>
						</div>
						<div className='col-6 col-md-4'>
							<span>
								<strong>Release Date</strong>
							</span>
							<p>{game.release_date}</p>
						</div>
					</div>
				</div>
				<div className='form-line'>{createReviews}</div>
				<h2>User Comments</h2>
				<div>{reviewTiles}</div>
			</div>
		</div>

		// 		<div>
		// 			<div className='show-page'>
		// 				<div className='work-feature-block row'>
		// 					<div className='row'>
		// 						<img
		// 							className='work-feature-block-image row'
		// 							src={game.thumbnail}
		// 							alt='game logo image'
		// 						/>
		// 						<img
		// 							className='work-feature-block-image row'
		// 							src={game.screenshot1}
		// 							alt='game logo image'
		// 						/>
		// 						<img
		// 							className='work-feature-block-image row'
		// 							src={game.screenshot2}
		// 							alt='game logo image'
		// 						/>
		// 						<h2 className='details'>Game Details</h2>
		// 						<ul className='ul-list'>
		// 							<li>
		// 								<strong>Platform:</strong> {game.platform}
		// 							</li>
		// 							<li>
		// 								<strong>Publisher:</strong> {game.publisher}
		// 							</li>
		// 							<li>
		// 								<strong>Developer:</strong> {game.developer}
		// 							</li>
		// 							<li>
		// 								<strong>Release date:</strong> {game.release_date}
		// 							</li>
		// 							<li>
		// 								<strong>Genre:</strong> {game.genre}
		// 							</li>
		// 							<li>
		// 								<strong>Title:</strong> {game.title}
		// 							</li>
		// 						</ul>
		// 						<div className='play-now'>
		// 							<a href={game.game_url} target='_blank'>
		// 								Play Now!
		// 							</a>
		// 						</div>
		// 					</div>
		// 					<div className='columns medium-5'>
		// 						<h2 className='work-feature-block-header' className='show-text'>
		// 							<strong>Description:</strong>
		// 						</h2>
		// 						<p className='show-text'>{toggleDescription}</p>
		// 						{/* <button onClick={descriptionButton}> Show more </button> */}
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className='show-form'>{createReviews}</div>
		// 			<div>{reviewTiles}</div>
		// 		</div>
	);
};

export default GamesShow;
