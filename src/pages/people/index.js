import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header';
import TitleSection from '../../components/title-section';
import GridSection from '../../components/grid-section';
import Loading from '../../components/loading';
import { Section } from './styles';

import { isAuthenticated } from '../../services/auth';

import { apiUrl } from '../../services/api';

export default class Peoples extends React.Component {
	state = {
		loading: true,
		people: [],
	};

	componentDidMount = async () => {
		try {
			if (await isAuthenticated()) {
				const response = await apiUrl.get('/classes/getAllPeople');
				const { results } = response.data;
				// console.log(results);
				return this.setState({ people: results, loading: false });
			} else {
				return this.props.history.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { people, loading } = this.state;
		// exibe loader ate receber uma resposta
		if (loading) {
			return <Loading />;
		}
		return (
			<>
				<Header {...this.props} />
				<Section>
					<TitleSection title="List of People" />
					{people.length > 0 ? (
						<GridSection list={people} />
					) : (
						<Redirect to={'/not-found'} />
					)}
				</Section>
			</>
		);
	}
}
