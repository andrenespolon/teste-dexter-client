import React from 'react';
import { Container, Title, GradientBar } from './styles';

export default class TitleSection extends React.Component {
	render() {
		return (
			<Container>
				<Title>{this.props.title}</Title>
				<GradientBar />
			</Container>
		);
	}
}
