import React, {useState, useEffect} from 'react'
import helperFetch from '../helpers/Fetcher.js'
import ReviewForm from './ReviewsForm.js'
import ReviewTiles from './ReviewTiles.js'

const GamesShow = (props) => {
  const [game, setGame] = useState({})
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState({})
  const gameId = props.match.params.id
  const[formData, setFormData] = useState({
    rating: "",
    body: "",
    game_id: gameId
  })

  useEffect(() => {
    helperFetch(`/api/v1/games/${gameId}`).then(gameData => {
      console.log(gameData)
      setGame(gameData)
      if (gameData.reviews) {
        setReviews(gameData.reviews)
      }
    })
    helperFetch('/api/v1/users').then(userData => {
      if (userData) {
        setUser(userData.user)
      }
    })
  }, [])

  const addNewReview = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/reviews", {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials:"same-origin",
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw(new Error(errorMessage))
      }
      const newReview = await response.json()
      console.log(gameId)
      if (newReview.errors) {
        alert(newReview.errors)
      } else {
        setReviews([
          ...reviews,
          newReview
        ])
      }
      setFormData({
        rating: "",
        body: "",
        game_id: gameId
      })
    } catch(err) {
      console.log(err)
    }
  }
  const reviewTiles = reviews.map((review) => {
    console.log("hi")
    return(
      <ReviewTiles
        key={review.id}
        review={review}
        user={review.user}/>
    ) 
  })
  
  let createReviews
  if (user) {
    createReviews = (
      <ReviewForm 
        addNewReview={addNewReview} 
        formData={formData} 
        setFormData={setFormData} 
      />
    )
  }

  return(
    <div>

          <h1 className="show">{game.title}</h1>
          <h1 className="show">{game.genre}</h1>
          <img src={game.thumbnail} alt='game logo image'></img>

        {createReviews}
        <div>
        {reviewTiles}
        </div>
        
      </div>

  )
}

export default GamesShow