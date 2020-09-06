import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const ButtonStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px 0;
	/* width: 100%; */
	height: 50px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 15px;
	letter-spacing: 1.5px;
	cursor: pointer;
	transition: ease 0.3s;
	background: ${(props) =>
		props.styled
			? 'linear-gradient(90deg, ' + color.purple + ',' + color.orange + ')'
			: 'none'};
	border: ${(props) => (props.styled ? 'none' : `1px solid ${color.grey}`)};
	color: ${(props) => (props.styled ? `${color.white}` : `${color.black}`)};
	&:hover {
		transform: scale(1.01);
		box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.5);
	}
`;
