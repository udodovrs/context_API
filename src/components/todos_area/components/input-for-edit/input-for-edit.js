import { useState } from 'react';
import style from './input-for-edit.module.css';

export const InputForEdit = ({ title, updateVlueEdit }) => {
	const [value, setValue] = useState(title);
	return (
		<input
			className={style.input}
			type="text"
			value={value}
			onChange={({ target }) => {
				setValue(target.value);
				updateVlueEdit(target.value);
			}}
		/>
	);
};
