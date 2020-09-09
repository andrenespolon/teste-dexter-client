import { Parse } from '../services/parseApi';

export const isAuthenticated = async () => {
	try {
		const currentUser = await Parse.User.currentAsync();
		if (!currentUser) {
			return false;
		}
		if (!currentUser.authenticated()) {
			return false;
		}
		return true;
	} catch (error) {
		Parse.User.logOut();
		return false;
	}
};
