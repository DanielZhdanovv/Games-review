import React, { useState } from "react";

const ChatTiles = (props) => {
	let username = props.chat.title;

	let chatTileClass;
	if (props.openChat === props.chat.id) {
		chatTileClass = "chat-button selected-chat";
	} else {
		chatTileClass = "chat-button";
	}

	const handleClick = () => {
		props.persistMessages(props.chat.id);
	};

	return (
		<button className={chatTileClass} onClick={handleClick}>
			{username}
		</button>
	);
};

export default ChatTiles;
