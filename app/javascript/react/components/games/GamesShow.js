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
      setGame(gameData)
      if (gameData.reviews) {
        setReviews(gameData.reviews)
      }
    })
    helperFetch('/api/v1/users').then(userData => {
      if (userData) {
        setUser(userData)
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
          <img src={game.thumbnail} alt='game logo image'></img>
          <h1 className="show">{game.title}</h1>
          <p className="show">{game.description}</p>
          <p className="show">{game.platform}</p>
          <p className="show">{game.publisher}</p>
          <p className="show">{game.developer}</p>
          <p className="show">{game.release_date}</p>
          {/* <p className="show">{game.minimum_system_requirements}</p>
          <p className="show">{game.screenshots}</p> */}
          <p className="show">{game.genre}</p>

        {createReviews}
        <div>
        {reviewTiles}
        </div>
        
      </div>

  )
}

export default GamesShow