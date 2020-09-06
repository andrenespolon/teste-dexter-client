import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const CardImage = styled.div`
	position: relative;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
	width: 280px;
	height: 280px;
	transition: all ease 0.2s;
	background-size: cover;
	background-position: center;
	background-image: linear-gradient(
			to bottom,
			rgba(245, 246, 252, 0.1),
			rgba(6, 6, 6, 0.5)
		),
		url('${(props) => props.src}');
	&:hover {
		transform: scale(1.01);
		box-shadow: 10px 10px 15px 1px rgba(0, 0, 0, 0.2);
	}
`;

export const CardLabel = styled.h2`
	z-index: 10;
	position: absolute;
	left: 1.5vw;
	bottom: 1vw;
	color: ${color.white};
	font-family: 'Open Sans', sans-serif;
	font-size: 26px;
	font-weight: 700;
	text-transform: capitalize;
	letter-spacing: 1.5px;
	transition: all ease 0.2s;
	/* ${CardImage}:hover & {
		color: ${color.orange};
	} */
`;
