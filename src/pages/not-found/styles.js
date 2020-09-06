import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Section = styled.section`
	background: ${color.ice};
	padding: 10vw 17vw 17vw 17vw;
	/* height: 1200px; */
	@media (max-width: 768px) {
		padding: 15vw 6vw;
	}
`;

export const TitleMedium = styled.h1`
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 30px;
	padding: 1vw;
	color: ${color.black};
	letter-spacing: 1.5px;
`;

export const TitleLarge = styled.h1`
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size: 150px;
	line-height: 150px;
	color: ${color.black};
	text-transform: uppercase;
	letter-spacing: 1.5px;
`;
