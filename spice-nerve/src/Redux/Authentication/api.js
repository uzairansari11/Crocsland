import axios from "axios";
/* Registering user api call */
export const registerUser = async (userDetails) => {
	try {
		const res = await axios.post(
			`https://crocsland.onrender.com/users`,
			userDetails,
		);
		return res.data;
	} catch (error) {
		return error;
	}
};

/* Getting all users in database to ensure no one can register with same email */
export const getUserDataFromApi = async () => {
	try {
		const res = await axios.get(`https://crocsland.onrender.com/users`);
		return res.data;
	} catch (error) {
		return error;
	}
};
