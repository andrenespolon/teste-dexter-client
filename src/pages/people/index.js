import React from 'react';
import { Redirect } from 'react-router-dom';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Skeleton from '../../components/skeleton';
import { Section } from './styles';

import { Parse } from '../../services/parseApi';

export default class Peoples extends React.Component {
	state = {
		loading: true,
		people: [],
	};

	componentDidMount = async () => {
		try {
			const getAllPeople = Parse.Object.extend('getAllPeople');
			const query = new Parse.Query(getAllPeople);
			query.select('name', 'link');
			const results = await query.find();

			let resultPeople = [];

			for (let i = 0; i < results.length; i++) {
				let object = results[i];
				resultPeople.push({
					name: object.get('name'),
					link: object.get('link'),
				});
			}
			return this.setState({ people: resultPeople, loading: false });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { people, loading } = this.state;
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
				<TitleSection title="List of People" />
				{people.length > 0 ? (
					<GridSection list={people} />
				) : (
					<Redirect to={'/not-found'} />
				)}
			</Section>
		);
	}
}
