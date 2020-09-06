import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Container = styled.header`
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: ease 0.2s;
	background: ${color.white};
	padding: 1.5vw 17vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${(props) =>
		props.value < 10
			? `0px 1px 10px 0px rgba(0, 0, 0, 0.2)`
			: `0px 1px 1px 0px rgba(0, 0, 0, 0.2)`};
	@media (max-width: 768px) {
		padding: 0.5vw 6vw;
	}
`;

export const Logo = styled.img`
	max-width: 200px;
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem 0 1rem 0;
`;

export const Links = styled.a`
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	padding: 0 0 0 3rem;
	font-weight: ${(props) => (props.selectedLink ? 700 : 300)};
	transition: ease 0.1s;
	&:hover {
		/* scale: 1.05; */
		color: ${color.purple};
	}
	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0 0 0 1.5rem;
	}
`;
