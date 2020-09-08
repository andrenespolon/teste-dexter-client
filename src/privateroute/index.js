import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Loading from '../components/loading';

class PrivateRoute extends Route {
	render() {
		const {
			component: Component,
			isAuthenticated,
			loading,
			location,
			...rest
		} = this.props;
		if (loading) {
			return <Loading />;
		}
		if (!isAuthenticated) {
			return <Redirect to={{ pathname: '/', state: { from: location } }} />;
		}
		return (
			<>
				<Header {...rest} />
				<Component {...rest} />
			</>
		);
	}
}

export { PrivateRoute };
