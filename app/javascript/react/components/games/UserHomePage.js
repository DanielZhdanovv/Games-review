import React from "react";
import { useState, useEffect } from "react";

const UserHomePage = (props) => {
	const [user, setUser] = useState({});
	const [profilePhoto, setProfilePhoto] = useState({});

	const fetchUser = async () => {
		const response = await fetch("/api/v1/users/");
		const userData = await response.json();
		setUser(userData);
		setProfilePhoto(userData.profile_photo.url);
	};

	useEffect(() => {
		fetchUser();
	}, []);
	console.log(user);
	let userImage = "";
	if (user.id) {
		userImage = profilePhoto;
	}
	return (
		<div>
			<p>Hello</p>
		</div>
	);
};

export default UserHomePage;
