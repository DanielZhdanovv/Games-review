import React, { useState, useEffect } from "react";
import ChatTiles from "./ChatTiles";
import ChatContainer from "./ChatContainer";
import helperFetch from "../helpers/Fetcher";

const ChatIndex = (props) => {
	const [user, setUser] = useState({});
	const [openChat, setOpenChat] = useState(null);
	const [persistedMessages, setPersistedMessages] = useState([]);

	useEffect(() => {
		helperFetch(`/api/v1/users`).then((userData) => {
			setUser(userData.user);
			if (props.location.chat) {
				helperFetch(`/api/v1/messages/${props.location.chat}`).then(
					(messageData) => {
						setPersistedMessages(messageData.messages);
						setOpenChat(props.location.chat);
					}
				);
			}
		});
	}, []);

	let persistMessages = (chatId) => {
		helperFetch(`/api/v1/messages/${chatId}`).then((messageData) => {
			setPersistedMessages(messageData.messages);
			setOpenChat(null);
			setOpenChat(chatId);
		});
	};

	let chatTiles;
	if (user.chats) {
		chatTiles = user.chats.map((chat) => {
			return (
				<div key={chat.id}>
					<ChatTiles
						persistMessages={persistMessages}
						openChat={openChat}
						chat={chat}
					/>
				</div>
			);
		});
	}

	let chatContainer;
	if (openChat !== null) {
		chatContainer = (
			<ChatContainer
				persistedMessages={persistedMessages}
				openChat={openChat}
			/>
		);
	}

	return (
		<div className='grid-x align-center'>
			<div className='cell small-5 large-5 chat-tiles'>{chatTiles}</div>
			<div className='cell small-6 large-6 chat-box'>{chatContainer}</div>
		</div>
	);
};

export default ChatIndex;
