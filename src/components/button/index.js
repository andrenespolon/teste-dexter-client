import React from 'react';
import { ButtonStyle } from './style';

export default class Button extends React.Component {
	render() {
		const { onClick, styled, label } = this.props;
		return (
			<ButtonStyle onClick={onClick} styled={styled}>
				{label}
			</ButtonStyle>
		);
	}
}
