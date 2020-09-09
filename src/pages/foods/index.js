import React from 'react';
import { Redirect } from 'react-router-dom';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Skeleton from '../../components/skeleton';
import { Section } from './styles';

import { Parse } from '../../services/parseApi';

export default class Foods extends React.Component {
	state = {
		loading: true,
		foods: [],
	};

	componentDidMount = async () => {
		try {
			const getAllFoods = Parse.Object.extend('getAllFoods');
			const query = new Parse.Query(getAllFoods);
			query.select('name', 'link');
			const results = await query.find();

			let resultFoods = [];

			for (let i = 0; i < results.length; i++) {
				let object = results[i];
				resultFoods.push({
					name: object.get('name'),
					link: object.get('link'),
				});
			}
			return this.setState({ foods: resultFoods, loading: false });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { foods, loading } = this.state;
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
				<TitleSection title="List of Foods" />
				{foods.length > 0 ? (
					<GridSection list={foods} />
				) : (
					<Redirect to={'/not-found'} />
				)}
			</Section>
		);
	}
}
