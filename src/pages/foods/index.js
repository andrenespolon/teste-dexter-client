import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Loading from '../../components/loading';
import { Section } from './styles';

import { isAuthenticated } from '../../services/auth';

import { apiUrl } from '../../services/api';

export default class Foods extends React.Component {
	state = {
		loading: true,
		foods: [],
	};

	componentDidMount = async () => {
		try {
			// resolve o problema da promisse em PrivateRoute
			if (await isAuthenticated()) {
				const response = await apiUrl.get('/classes/getAllFoods');
				const { results } = response.data;
				return this.setState({ foods: results, loading: false });
			} else {
				return this.props.history.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { foods, loading } = this.state;
		// exibe loader ate receber uma resposta
		if (loading) {
			return <Loading />;
		}
		return (
			<>
				<Header {...this.props} />
				<Section>
					<TitleSection title="List of Foods" />
					{foods.length > 0 ? (
						<GridSection list={foods} />
					) : (
						<Redirect to={'/not-found'} />
					)}
				</Section>
			</>
		);
	}
}
