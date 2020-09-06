import styled from 'styled-components';

export const GridContainer = styled.div`
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 2fr));
	justify-content: center !important;
	justify-items: center;
`;
