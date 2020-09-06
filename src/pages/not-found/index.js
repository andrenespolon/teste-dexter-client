import React from 'react';
import Button from '../../components/button';
import { Section, TitleMedium, TitleLarge } from './styles';

export default class NotFound extends React.Component {
	render() {
		return (
			<Section>
				<TitleLarge>404 Not Found</TitleLarge>
				<TitleMedium>Ops! Algo deu errado...</TitleMedium>
				<div style={{ maxWidth: '250px' }}>
					<Button
						styled
						label="Voltar"
						onClick={() => (window.location = '/foods')}
					/>
				</div>
			</Section>
		);
	}
}
