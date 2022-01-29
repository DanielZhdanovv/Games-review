import React from "react";
const StartChatButton = (props) => {
	const handleClick = () => {
		let body = {
			title: `${props.currentUser.username} with ${props.receivingUser.username}`,
			reverse_title: `${props.receivingUser.username} with ${props.currentUser.username}`,
			sender_id: props.currentUser.id,
			receiver_id: props.receivingUser.id,
		};
		props.createNewChat(body);
	};

	return (
		<button className='nav-text edit-button' onClick={handleClick}>
			Let's Jam!
		</button>
	);
};

export default StartChatButton;
