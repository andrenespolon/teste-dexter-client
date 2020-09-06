import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	flex-direction: column;
	/* align-content: stretch; */
	padding-bottom: 10px;
`;

export const Label = styled.h5`
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 15px;
	padding-bottom: 1vw;
	color: ${color.black};
	letter-spacing: 1.5px;
`;

export const Form = styled.span`
	padding: 8px 5px;
	display: flex;
	justify-content: stretch;
	align-items: center;
	height: 35px;
	transition: all ease 0.5s;
	border: ${(props) =>
		props.error ? `solid 1px #d32f2f;` : `solid 1px ${color.black}`};
`;

export const Text = styled.input`
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 15px;
	letter-spacing: 1.2px;
	width: 100%;
	padding: 6px 15px;
	border: none;
	outline: none;
	::placeholder {
		color: ${color.grey};
	}
`;

export const Image = styled.img`
	max-width: 16px;
	/* height: 18px; */
	margin: 10px;
`;

export const Error = styled.span`
	color: #d32f2f;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 13px;
	letter-spacing: 1.2px;
	width: 100%;
	min-height: 18px;
	transition: all ease 0.5s;
	padding: 2px;
	opacity: ${(props) => (props.error ? '1' : '0')};
`;
