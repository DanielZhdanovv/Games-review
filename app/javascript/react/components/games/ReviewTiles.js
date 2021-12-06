import React, { useState } from "react";
import ReviewEdit from './ReviewEdit'

const ReviewTiles = (props) => {


  const [edit, setEdit] = useState(false)
  const { review, user } = props
  const [currentReview, setCurrentReview] = useState (review)
  const[formData, setFormData] = useState({
    rating: "2",
    body: ""
  })
  const formattedRating = `${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}`

  let text = "user"

  if (user.role == "admin"){
    text = "admin"
  }

  const editReview = async (formPayload) => {
    setEdit(false)
    try {
      const response = await fetch(`/api/v1/reviews/${review.id}`, {
        method:"PATCH",
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
        setCurrentReview(newReview)
      }
      setFormData({
        rating: "2",
        body: review.body
      })
    } catch(err) {
      console.log(err)
    }
  }

  const button = (event) => {
    event.preventDefault()
    setEdit(!edit)
  }

  let textField = <h3 className="review-description">{currentReview.body}</h3>
  if (edit === true) {
    textField = <ReviewEdit 
    formData={formData} 
    setFormData={setFormData}
    editReview={editReview}
    />
  }

  return (

    <div className="review-tile cell small-8">
      <div className="review">
        <h2 className={text}>{user.first_name}</h2>
        <p className="stars">{formattedRating}</p>
        <button
        onClick={button} 
        >Edit me </button>
      </div>
      {textField}
    </div>
  )
}

export default ReviewTiles;