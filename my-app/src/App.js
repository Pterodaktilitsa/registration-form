import './App.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginChangeScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/!^[\w_]*$/,
			'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание',
		)
		.max(20, 'Неверный логин. Должно быть не больше 20 символов')
		.required('Обязательное поле'),
	password: yup
		.string()
		.matches(/!^[\w_]*$/, 'Неверный пароль. Допускается только ввод букв.')
		.max(8, 'Неверный пароль. Допускается не больше 8 символов.')
		.required('Обязательное поле'),
	confirmPassword: yup
		.string()
		.matches(/!^[\w_]*$/, 'Неверный пароль. Допускается только ввод букв.')
		.max(8, 'Неверный пароль. Допускается не больше 8 символов.')
		.required('Обязательное поле')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const App = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(loginChangeScheme),
	});

	return (
		<div className="App">
			<form className="Form">
				<label>
					Email
					<input
						type="text"
						placeholder="Обязательное поле"
						name="email"
						ref={handleSubmit}
					/>
				</label>
				{errors.email && <span>{errors.email.message}</span>}

				<label>
					Пароль
					<input
						type="password"
						placeholder="Обязательное поле"
						name="password"
						ref={register}
					/>
				</label>
				{errors.password && <span>{errors.password.message}</span>}

				<label>
					Повтор пароля
					<input
						type="password"
						placeholder="Обязательное поле"
						name="confirmPassword"
						ref={register}
					/>
				</label>
				{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

				<button type="submit">Войти</button>
			</form>
		</div>
	);
};
