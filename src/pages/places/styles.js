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
