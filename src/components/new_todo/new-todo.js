import { useState } from 'react';
import style from './new-todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { newTodo } from '../../actions/new-todo';

export const NewTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const isNewTodo = useSelector((state) => state.assitState.isNewTodo);

	const onNewTodo = () => {
		dispatch({ type: 'isNewTodo', payload: !isNewTodo });
		if (value !== '' && isNewTodo) dispatch(newTodo(value));
	};
	return (
		<div className={style.wrapper}>
			{isNewTodo && (
				<input
					className={style.input}
					type="text"
					value={value}
					onChange={({ target }) => setValue(target.value)}
					placeholder="Новая задача..."
				/>
			)}
			<button className={style.btn} onClick={onNewTodo}>
				{isNewTodo ? '✔' : '✚'}
			</button>
		</div>
	);
};
