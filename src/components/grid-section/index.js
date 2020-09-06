import React from 'react';
import Card from '../card';
import { GridContainer } from './styles';

const path = process.env.REACT_APP_API_URL + '/';

export default class Grid extends React.Component {
	render() {
		const { list } = this.props;
		return (
			<GridContainer>
				{list.map((ele, idx) => (
					<Card key={idx} src={path + ele.link} label={ele.name} />
				))}
			</GridContainer>
		);
	}
}
