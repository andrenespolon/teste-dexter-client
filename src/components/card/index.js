import React from 'react';
import { CardImage, CardLabel } from './styles';

export default class Card extends React.Component {
	render() {
		return (
			<CardImage src={this.props.src}>
				<CardLabel>{this.props.label}</CardLabel>
			</CardImage>
		);
	}
}
