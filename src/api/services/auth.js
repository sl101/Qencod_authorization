import axios from "axios";
import $api from "../http";

export const login = async (email, password) => {
	try {
		const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
			email,
			password,
		});

		if (result.status >= 200 && result.status <= 300) {
			return result.data;
		}
	} catch (error) {
		let message = "Login request error...";
		console.log("Login request error: ", error);
		if (error.response?.status === 401) {
			message = "Invalid email or password";
		}
		throw new Error(message);
	}
};

export const password_reset = async (body) => {
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/password-reset`,
			body
		);
		//TODO send a message with redirection to the password change page after confirming the link in the mail
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const password_set = async (body) => {
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/password-set`
		);
		//TODO password set logic
		return result;
	} catch (error) {
		console.log(error);
	}
};

//TODO: service request, includes adding a token
export const token_access = async (access_id) => {
	try {
		const result = await $api.post(
			`${process.env.REACT_APP_BASE_URL}/access-token`,
			access_id
		);
		//TODO: processing service request logic
	} catch (error) {
		console.log(error);
	}
};

//TODO: token update request
export const token_refresh = async (refresh_token) => {
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/refresh-token`,
			refresh_token
		);
		//TODO token change logic
	} catch (error) {
		console.log(error);
	}
};
