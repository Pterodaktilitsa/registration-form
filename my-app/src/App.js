import { useState } from 'react';
import './App.css';

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onEmailChange = ({ target }) => {
		setEmail(target.value);
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);
	};

	const onConfirmPasswordChange = ({ target }) => {
		setConfirmPassword(target.value);
	};

	let newError = null;
	let newErrorForConfirm = null;

	const stringForValidation = '!_*@$?<>{}()';

	for (const symbol of stringForValidation) {
		if (password.includes(symbol)) {
			newError = 'Неверный пароль. Допускается только ввод букв.';
		} else if (password.length > 8) {
			newError = 'Неверный пароль. Допускается не больше 8 символов.';
		}

		if (confirmPassword.includes(symbol)) {
			newErrorForConfirm = 'Неверный пароль. Допускается только ввод букв.';
		} else if (confirmPassword.length > 8) {
			newErrorForConfirm = 'Неверный пароль. Допускается не больше 8 символов.';
		}
	}

	const disabledCheck = newError === null && newErrorForConfirm === null ? false : true;

	return (
		<div className="App">
			<form className="Form">
				<label>
					Email
					<input
						type="text"
						placeholder="Обязательное поле"
						value={email}
						onChange={onEmailChange}
					/>
				</label>

				<label>
					Пароль
					<input
						type="password"
						placeholder="Обязательное поле"
						value={password}
						onChange={onPasswordChange}
					/>
					<span>{newError}</span>
				</label>

				<label>
					Повтор пароля
					<input
						type="password"
						placeholder="Обязательное поле"
						value={confirmPassword}
						onChange={onConfirmPasswordChange}
					/>
					<span>{newErrorForConfirm}</span>
				</label>

				<button disabled={disabledCheck}>Войти</button>
			</form>
		</div>
	);
};
