import { useState } from 'react';
import style from './control-panel.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ControlPanel = ({ updateValueForSearch }) => {
	const [value, setValue] = useState('');
	const sortAZ = useSelector((state) => state.assitState.sortAZ);
	const dispatch = useDispatch();

	return (
		<div className={style.wrapper}>
			<input
				type="text"
				className={style.input}
				value={value}
				placeholder="Поиск..."
				onChange={({ target }) => {
					setValue(target.value);
					updateValueForSearch(target.value);
				}}
			/>
			<button
				className={style.btn}
				onClick={() => dispatch({ type: 'sortAZ', payload: !sortAZ })}
			>
				{sortAZ ? '▲' : '▼'}
			</button>
		</div>
	);
};
