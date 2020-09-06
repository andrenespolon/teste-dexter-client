import axios from 'axios';

export const apiUrl = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}/parse`,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		'X-Parse-Application-Id': `${process.env.REACT_APP_ID}`,
		'X-Parse-REST-API-Key': `${process.env.REACT_APP_MASTER_KEY}`,
	},
});

export const apiAuth = (token) =>
	axios.create({
		baseURL: `${process.env.REACT_APP_API_URL}/parse`,
		timeout: 5000,
		headers: {
			'Content-Type': 'application/json',
			'X-Parse-Application-Id': `${process.env.REACT_APP_ID}`,
			'X-Parse-REST-API-Key': `${process.env.REACT_APP_MASTER_KEY}`,
			'X-Parse-Session-Token': token,
		},
	});
