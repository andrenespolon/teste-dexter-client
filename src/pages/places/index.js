import React from 'react';
import { Redirect } from 'react-router-dom';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Skeleton from '../../components/skeleton';
import { Section } from './styles';

import { Parse } from '../../services/parseApi';

export default class Places extends React.Component {
	state = {
		loading: true,
		places: [],
	};

	componentDidMount = async () => {
		try {
			const getAllPlaces = Parse.Object.extend('getAllPlaces');
			const query = new Parse.Query(getAllPlaces);
			query.select('name', 'link');
			const results = await query.find();

			let resultPlaces = [];

			for (let i = 0; i < results.length; i++) {
				let object = results[i];
				resultPlaces.push({
					name: object.get('name'),
					link: object.get('link'),
				});
			}
			return this.setState({ places: resultPlaces, loading: false });
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
