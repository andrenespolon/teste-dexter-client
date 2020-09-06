// PrivateRoute is not used
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import { isAuthenticated } from '../services/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={async (props) =>
			(await isAuthenticated()) ? ( // retorna promisse; se usar async-await retorna erro
				<>
					<Header {...props} />
					<Component {...props} />
				</>
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)
		}
	/>
);
