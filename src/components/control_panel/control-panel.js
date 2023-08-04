import { useState } from 'react';
import style from './control-panel.module.css';

export const ControlPanel = ({updateValueForSearch, sortAZ, setSortAZ}) => {
	const [value, setValue] = useState('');

	return (
		<div className={style.wrapper}>
			<input
				type="text"
				className={style.input}
				value={value}
				placeholder="Поиск..."
				onChange={({ target }) => {
					setValue(target.value);
					updateValueForSearch(target.value)
				}}
			/>
			<button className={style.btn} onClick={()=>setSortAZ(!sortAZ)}>
				{sortAZ ? '▲' : '▼'}
				</button>
		</div>
	);
};
