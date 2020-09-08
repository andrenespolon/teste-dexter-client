import React from 'react';
import { Container, Display } from './styles';

export default class Skeleton extends React.Component {
	state = {
		items: [],
	};
	componentDidMount = () => {
		const { repeat } = this.props;
		const array = [];
		for (let i = 0; i < repeat; i++) {
			array.push(<Display key={i} />);
		}
		return this.setState({ items: array });
	};
	render() {
		const { items } = this.state;
		return <Container>{items.map((ele) => ele)}</Container>;
	}
}
