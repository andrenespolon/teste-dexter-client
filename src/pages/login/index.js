import React from 'react';
import Loader from 'react-loader-spinner';
import {
	Section,
	SectionImage,
	Form,
	Container,
	ErrorForm,
	Image,
	Frame,
	CheckBox,
	Label,
	HelpLink,
	RulesLink,
	FrameHorizontal,
	Hr,
	Or,
	Loading,
} from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

import { Parse } from '../../services/parseApi';

import color from '../../configs/colorTheme';

const logo = `${process.env.REACT_APP_API_URL}/assets/logo.png`;
const bg = `${process.env.REACT_APP_API_URL}/assets/bg.jpg`;
const mail = `${process.env.REACT_APP_API_URL}/assets/mail.png`;
const lock = `${process.env.REACT_APP_API_URL}/assets/lock.png`;

export default class Login extends React.Component {
	state = {
		showPassword: false,
		showLogin: true,
		errorEmail: false,
		msgErrorEmail: '',
		email: '',
		errorPassword: false,
		msgErrorPassword: '',
		password: '',
		loading: false,
		errorLogin: false,
		msgErrorLogin: '',
	};

	onChangeEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	onKeyPressDownInput = (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
		} else if (e.keyCode === 13) {
			this.checkCrendential('login');
		}
		// console.log(e.keyCode);
	};

	onChangePassword = (e) => {
		const validPassword = e.target.value;
		this.setState({ password: validPassword });
	};

	emailIsValid = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	checkCrendential = (action) => {
		let validEmail = false;
		let validPass = false;
		const { email, password } = this.state;

		this.setState({ errorLogin: false });

		// check email
		if (!this.emailIsValid(email) || email.length < 5) {
			this.setState({
				errorEmail: true,
				msgErrorEmail: 'E-mail inválido.',
			});
		} else {
			validEmail = true;
			this.setState({
				errorEmail: false,
				msgErrorEmail: '',
			});
		}

		// check password too
		if (password.length < 3) {
			this.setState({
				errorPassword: true,
				msgErrorPassword: 'A senha deve ter pelo menos 4 dígitos.',
			});
		} else {
			validPass = true;
			this.setState({
				errorPassword: false,
				msgErrorPassword: '',
			});
		}

		if (validEmail && validPass) {
			this.setState({ loading: true });
			switch (action) {
				case 'login':
					return this.loginSession();

				case 'create':
					return this.createAccount();

				default:
					return;
			}
		}
	};

	loginSession = async () => {
		const { email, password } = this.state;
		try {
			await Parse.User.logIn(email, password);
			return (window.location = '/foods');
		} catch (error) {
			return this.errorHandling(error.code);
		}
	};

	createAccount = async () => {
		const { email, password } = this.state;
		const query = new Parse.Query(Parse.User);
		query.equalTo('username', email);
		try {
			const results = await query.find();
			if (results.length > 0) {
				return this.errorHandling(999);
			}
			const user = new Parse.User();
			user.set('username', email);
			user.set('password', password);
			await user.signUp();
			return (window.location = '/foods');
		} catch (error) {
			return this.errorHandling(error.code);
		}
	};

	errorHandling = (code) => {
		switch (code) {
			case 101:
				return this.setState({
					loading: false,
					errorLogin: true,
					msgErrorLogin: 'E-mail ou senha inválido!',
				});

			case 999:
				return this.setState({
					loading: false,
					errorLogin: true,
					msgErrorLogin: 'Este e-mail já está cadastrado!',
				});

			default:
				return this.setState({
					loading: false,
					errorLogin: true,
					msgErrorLogin: 'Ops! Algo deu errado.',
				});
		}
	};

	loggingIn = (id, token) => {
		const securityToken = token.split(':');
		localStorage.setItem(
			'sessionUser',
			JSON.stringify({
				user: id,
				token: securityToken[1],
			})
		);
		this.setState({
			loading: false,
		});
		return (window.location = '/foods');
	};

	render() {
		const {
			showPassword,
			showLogin,
			email,
			errorEmail,
			msgErrorEmail,
			password,
			errorPassword,
			msgErrorPassword,
			loading,
			errorLogin,
			msgErrorLogin,
		} = this.state;
		return (
			<Section>
				<SectionImage src={bg} />
				<Form>
					<Image src={logo} />
					<Container show={showLogin}>
						<Input
							placeHolder="seunome@gmail.com"
							label="Email"
							type="email"
							imgsrc={mail}
							error={errorEmail}
							msgError={msgErrorEmail}
							value={email}
							onKeyDown={this.onKeyPressDownInput}
							onChange={this.onChangeEmail}
						/>
						<Input
							placeHolder="Password"
							label="Password"
							type={showPassword ? 'text' : 'password'}
							imgsrc={lock}
							error={errorPassword}
							msgError={msgErrorPassword}
							value={password}
							onKeyDown={this.onKeyPressDownInput}
							onChange={this.onChangePassword}
						/>
						<Frame>
							<CheckBox
								id="showPassword"
								name="showPassword"
								onChange={() => this.setState({ showPassword: !showPassword })}
								checked={showPassword}
								label="Mostrar a senha"
								type="checkbox"
							/>
							<Label htmlFor="showPassword">Mostrar a senha</Label>
						</Frame>
						<Frame>
							<HelpLink href="/">Problemas para acessar sua conta?</HelpLink>
						</Frame>
						<ErrorForm error={errorLogin}>
							<img
								src={process.env.PUBLIC_URL + '/assets/error.png'}
								alt="error"
							/>
							<span>{msgErrorLogin}</span>
						</ErrorForm>
						{loading ? (
							<Loading>
								<Loader type="TailSpin" color={color.black} />
							</Loading>
						) : (
							<div>
								<Button
									styled
									label="Acessar"
									onClick={() => this.checkCrendential('login')}
								/>
								<FrameHorizontal align="center">
									<Hr />
									<Or>ou</Or>
									<Hr />
								</FrameHorizontal>
								<Button
									label="Cadastrar"
									onClick={() => this.checkCrendential('create')}
								/>
							</div>
						)}
					</Container>
					{/* outher container  */}
					{/* ... */}
					<FrameHorizontal align="left">
						<RulesLink href="/">Termos de uso</RulesLink>
						<span>&#8729;</span>
						<RulesLink href="/">Política de privacidade</RulesLink>
					</FrameHorizontal>
				</Form>
			</Section>
		);
	}
}
