import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './privateroute';

import Login from './pages/login';
import Foods from './pages/foods';
import People from './pages/people';
import Places from './pages/places';
import NotFound from './pages/not-found';

import { isAuthenticated } from './services/auth';

export default class Routes extends React.Component {
	state = {
		authentication: false,
		loading: true,
	};

	componentDidMount = async () => {
		try {
			const auth = await isAuthenticated();
			if (!auth) {
				return this.setState({ loading: false });
			}
			return this.setState({ authentication: true, loading: false });
		} catch (error) {
			// console.log(error);
			window.location = '/not-found';
		}
	};

	render() {
		const { authentication, loading } = this.state;
		return (
			<Switch>
				<Route exact path="/" component={Login} />
				<PrivateRoute
					exact
					path="/foods"
					isAuthenticated={authentication}
					loading={loading}
					component={Foods}
				/>
				<PrivateRoute
					exact
					path="/people"
					isAuthenticated={authentication}
					loading={loading}
					component={People}
				/>
				<PrivateRoute
					exact
					path="/places"
					isAuthenticated={authentication}
					loading={loading}
					component={Places}
				/>
				<Route exact path="/*" component={NotFound} />
			</Switch>
		);
	}
}
