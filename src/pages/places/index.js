import React from 'react';
import { Redirect } from 'react-router-dom';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Skeleton from '../../components/skeleton';
import { Section } from './styles';

import { apiUrl } from '../../services/api';

export default class Places extends React.Component {
	state = {
		loading: true,
		places: [],
	};

	componentDidMount = async () => {
		try {
			const response = await apiUrl.get('/classes/getAllPlaces');
			const { results } = response.data;
			return this.setState({ places: results, loading: false });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { places, loading } = this.state;
		// exibe skeleton ate receber uma resposta
		if (loading) {
			return (
				<Section>
					<TitleSection title="loading..." />
					<Skeleton repeat={6} />
				</Section>
			);
		}
		return (
			<Section>
				<TitleSection title="List of Places" />
				{places.length > 0 ? (
					<GridSection list={places} />
				) : (
					<Redirect to={'/not-found'} />
				)}
			</Section>
		);
	}
}
