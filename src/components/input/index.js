import React from 'react';
import { Container, Label, Form, Text, Image, Error } from './style';

export default class Input extends React.Component {
	render() {
		const {
			value,
			onChange,
			onKeyDown,
			label,
			placeHolder,
			type,
			imgsrc,
			error,
			msgError,
		} = this.props;
		return (
			<Container>
				<Label>{label}</Label>
				<Form error={error}>
					<Text
						placeholder={placeHolder}
						type={type}
						value={value}
						onChange={onChange}
						onKeyDown={onKeyDown}
					/>
					<Image src={imgsrc} />
				</Form>
				<Error error={error}>{msgError}</Error>
			</Container>
		);
	}
}
