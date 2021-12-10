import React, { useState } from "react";
import ReviewEdit from './ReviewEdit'

const ReviewTiles = (props) => {


  const [edit, setEdit] = useState(false)
  const { review, user, deleteReview, position, currentUser } = props
  const [currentReview, setCurrentReview] = useState (review)
  const[formData, setFormData] = useState({
    rating: "2",
    body: ""
  })

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
        setFormData({
          body: review.body
        })
      }
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
  let deleteButton
  let editButton
  if (currentUser.id === user.id) {
    deleteButton = <button className="edit" onClick={()=> deleteReview(review.id, position)}>Delete</button>
    editButton = <button onClick={button} className="edit">Edit</button>
  }
  return (
    
    <div className="review-tile cell small-8">
      <div className="show-name">
        <h2 className={text}>{user.first_name}</h2>
      </div>
      {textField}
      {editButton}
      {deleteButton}

    </div>
  )
}


export default ReviewTiles;