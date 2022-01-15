import React, { useState } from "react";

const ReviewForm = (props) => {
	const { formData, setFormData, game } = props;

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addNewReview(formData);
	};

	return (
		<div className='cell small-8'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='body' className='ratings'>
					<strong>What do you think about {game}?</strong>
				</label>
				<textarea
					type='text'
					name='body'
					id='body'
					onChange={handleChange}
					value={formData.body}
				/>
				<input className='submit-button' type='submit' />
			</form>
		</div>
	);
};
export default ReviewForm;
