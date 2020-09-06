import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Container = styled.div``;

export const Title = styled.h3`
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 18px;
	color: ${color.black};
	text-transform: uppercase;
	letter-spacing: 1.5px;
`;

export const GradientBar = styled.div`
	width: 100%;
	height: 5px;
	margin: 0.5vw 0 2vw 0;
	/* background: linear-gradient(90deg, #AE23A9, #DC4E1B); */
	background: ${'linear-gradient(90deg, ' +
	color.purple +
	',' +
	color.orange +
	');'};
`;
