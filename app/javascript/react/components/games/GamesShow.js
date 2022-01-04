import React, { useState, useEffect } from "react";
import helperFetch from "../helpers/Fetcher.js";
import ReviewForm from "./ReviewsForm.js";
import ReviewTiles from "./ReviewTiles.js";
import { Link } from "react-router-dom";

const GamesShow = (props) => {
	const [game, setGame] = useState({});
	const [reviews, setReviews] = useState([]);
	const [user, setUser] = useState({});
	const [gameDescription, setGameDescription] = useState(false);
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
		<div>
			<div className='show-page'>
				<div className='work-feature-block row'>
					<div className='row'>
						<img
							className='work-feature-block-image row'
							src={game.thumbnail}
							alt='game logo image'
						/>
						<h2 className='details'>Game Details</h2>
						<ul className='ul-list'>
							<li>
								<strong>Platform:</strong> {game.platform}
							</li>
							<li>
								<strong>Publisher:</strong> {game.publisher}
							</li>
							<li>
								<strong>Developer:</strong> {game.developer}
							</li>
							<li>
								<strong>Release date:</strong> {game.release_date}
							</li>
							<li>
								<strong>Genre:</strong> {game.genre}
							</li>
							<li>
								<strong>Title:</strong> {game.title}
							</li>
							<li>
								<a href={game.game_url} target='_blank'>
									Play Now!
								</a>
							</li>
						</ul>
					</div>
					<div className='columns medium-5'>
						<h2 className='work-feature-block-header' className='show-text'>
							<strong>Description:</strong>
						</h2>
						<p className='show-text'>{toggleDescription}</p>
						{/* <button onClick={descriptionButton}> Show more </button> */}
					</div>
				</div>
			</div>
			<div className='show-form'>{createReviews}</div>
			<div>{reviewTiles}</div>
		</div>
	);
};

export default GamesShow;
