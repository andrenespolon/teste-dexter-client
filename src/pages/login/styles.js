import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Section = styled.section`
	position: relative;
	background: ${color.ice};
	width: 100%;
	height: 900px;
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const SectionImage = styled.div`
	position: absolute;
	top: 16vw;
	right: 0;
	width: 59vw;
	height: 30vw;
	background-size: cover;
	background-position: center;
	background-image: url('${(props) => props.src}');
	@media (max-width: 768px) {
		display: none;
	}
`;

export const Image = styled.img`
	max-width: 15vw;
	padding: 20px 0 30px 0;
	@media (max-width: 768px) {
		max-width: 200px;
	}
`;

export const Form = styled.div`
	position: absolute;
	background: ${color.white};
	width: 340px;
	min-height: 700px;
	box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
	padding: 35px;
	margin: 50px 160px 50px 160px;
	@media (max-width: 768px) {
		width: auto;
		min-height: auto;
		margin: 5px;
	}
`;

export const Container = styled.div`
	transition: all ease 0.3s;
	/* visibility: ${(props) => (props.show ? 'visible' : 'hidden')}; */
	display: ${(props) => (props.show ? 'block' : 'none')};
	opacity: ${(props) => (props.show ? '1' : '0')};
`;

export const Frame = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const FrameHorizontal = styled.div`
	padding: 10px 0 10px 0;
	display: flex;
	justify-content: ${(props) => {
		switch (props.align) {
			case 'left':
				return 'flex-start';

			case 'center':
				return 'center';

			case 'right':
				return 'flex-end';

			default:
				return 'center';
		}
	}};
	align-items: center;
	flex-direction: row;
	span {
		color: ${color.black};
		padding: 0 5px 0 5px;
	}
`;

export const CheckBox = styled.input`
	width: 15px;
	height: 15px;
	color: ${color.black};
	border: 1px solid ${color.black};
	border-radius: 0px;
	appearance: none;
	outline: none;
	cursor: pointer;
	transition: ease 0.2s;
	&::before {
		content: '';
	}
	&:checked {
		background: ${color.black};
		&::before {
			opacity: 1;
		}
	}
`;

export const Label = styled.label`
	padding-left: 10px;
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 15px;
	letter-spacing: 1.2px;
	cursor: pointer;
`;

export const HelpLink = styled.a`
	margin: 30px 0 0 0;
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	font-size: 13px;
	letter-spacing: 1.2px;
	text-decoration: none;
	transition: all 0.2s;
	&:hover {
		color: ${color.purple};
	}
`;

export const RulesLink = styled.a`
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 13px;
	letter-spacing: 1.2px;
	text-decoration: none;
	transition: all 0.2s;
	&:hover {
		color: ${color.purple};
	}
`;

export const ErrorForm = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: all ease 0.5s;
	opacity: ${(props) => (props.error ? '1' : '0')};
	img {
		display: ${(props) => (props.error ? '1' : '0')};
	}
	span {
		padding: 20px 0 20px 3px;
		color: #d32f2f;
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: 13px;
		letter-spacing: 1.2px;
	}
`;

export const Hr = styled.hr`
	border-top: 1px solid rgba(0, 0, 0, 0.5);
	width: 50%;
	margin: 10px 0 10px 0;
`;

export const Or = styled.span`
	margin: 15px;
	color: ${color.black};
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 16px;
	letter-spacing: 1.2px;
`;

export const Loading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 55px 0 55px 0;
`;
