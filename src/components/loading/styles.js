import styled from 'styled-components';
import color from '../../configs/colorTheme';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	background: ${color.ice};
	padding: 17vw;
	height: 1200px;
	@media (max-width: 768px) {
		padding: 20vw;
	}
`;
