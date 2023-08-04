import { useState, useContext } from 'react';
import style from './new-todo.module.css';
import { AppContext } from '../../context'

export const NewTodo = () => {
	const [value, setValue] = useState('');
	const [isNewTodo, setIsNewTodo] = useState(false);
	const { update, setUpdate } = useContext(AppContext);

	const onNewTodo = () => {
		setIsNewTodo(!isNewTodo);
		if (value !== '' && isNewTodo)
			fetch(`http://localhost:3005/todos`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: value,
					complete: false,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					console.log('POST:', response);
					setUpdate(!update);
					setValue('');
				});
	};
	return (
		<div className={style.wrapper}>
			{isNewTodo && (
				<input
					className={style.input}
					type="text"
					value={value}
					onChange={({ target }) => setValue(target.value)}
					placeholder='Новая задача...'
				/>
			)}
			<button className={style.btn} onClick={onNewTodo}>{isNewTodo ? '✔' : '✚'}</button>
		</div>
	);
};
