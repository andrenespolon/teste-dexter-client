import React from 'react';
import { Container, Logo, Menu, Links } from './styles';

const logo = `${process.env.REACT_APP_API_URL}/assets/logo.png`;

export default class Header extends React.Component {
	state = {
		selectedUrl: 0,
		scroll: 0,
	};

	componentDidMount = () => {
		const { path } = this.props;
		const url = path.split('/');

		switch (url[1]) {
			case 'foods':
				this.setState({ selectedUrl: 1 });
				break;

			case 'people':
				this.setState({ selectedUrl: 2 });
				break;

			case 'places':
				this.setState({ selectedUrl: 3 });
				break;

			default:
				break;
		}

		this.windowScroll();
	};

	windowScroll = () => {
		document.addEventListener('scroll', () => {
			// console.log(window.scrollY);
			this.setState({ scroll: window.scrollY });
		});
	};

	render() {
		const { selectedUrl, scroll } = this.state;
		return (
			<Container value={scroll}>
				<Logo src={logo} />
				<Menu>
					<Links selectedLink={selectedUrl === 1} href="/foods">
						Foods
					</Links>
					<Links selectedLink={selectedUrl === 2} href="/people">
						People
					</Links>
					<Links selectedLink={selectedUrl === 3} href="/places">
						Places
					</Links>
				</Menu>
			</Container>
		);
	}
}
