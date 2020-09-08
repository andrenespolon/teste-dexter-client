import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Container = styled.div`
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 2fr));
	justify-content: center !important;
	justify-items: center;
`;

export const Display = styled.div`
	position: relative;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
	width: 280px;
	height: 280px;
	overflow: hidden;
	background: ${color.white};
	&::before {
		content: '';
		display: block;
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 350px;
		background: linear-gradient(
			to right,
			transparent 0%,
			#e1e1e1 60%,
			transparent 100%
		);
		animation: load 1.5s infinite;
		@keyframes load {
			from {
				left: -400px;
			}
			to {
				left: 100%;
			}
		}
	}
`;
