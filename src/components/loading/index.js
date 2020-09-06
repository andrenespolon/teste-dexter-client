import React from 'react';
import Loader from 'react-loader-spinner';
import color from '../../configs/colorTheme';
import { Container } from './styles';

export default class Loading extends React.Component {
	render() {
		return (
			<Container>
				<Loader type="TailSpin" color={color.black} />
			</Container>
		);
	}
}
