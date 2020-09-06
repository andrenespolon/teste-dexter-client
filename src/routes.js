import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { PrivateRoute } from './privateroute';

import Login from './pages/login';
import Foods from './pages/foods';
import People from './pages/people';
import Places from './pages/places';
import NotFound from './pages/not-found';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			{/* 
      // PrivateRoute gera erro com async-await
      <PrivateRoute exact path="/foods" component={Foods} />
			<PrivateRoute exact path="/people" component={People} />
      <PrivateRoute exact path="/places" component={Places} /> 
      */}
			<Route exact path="/foods" component={Foods} />
			<Route exact path="/people" component={People} />
			<Route exact path="/places" component={Places} />
			<Route exact path="/*" component={NotFound} />
		</Switch>
	);
}
