import { apiAuth } from '../services/api';

export const isAuthenticated = async () => {
	const loggedIn = JSON.parse(localStorage.getItem('sessionUser'));

	if (!loggedIn) return false;

	const { user, token } = loggedIn;

	if (token.length !== 32) {
		return false;
	} else {
		const originalToken = `r:${token}`;

		try {
			const response = await apiAuth(originalToken).get('/users/me');

			if (response.status === 200) {
				const { objectId, sessionToken } = response.data;

				if (sessionToken !== originalToken || objectId !== user) return false;

				return true;
			}
		} catch (error) {
			return false;
		}
	}
};
