import style from './edit-and-delete.module.css';
import { useRef, useState, useContext } from 'react';
import { InputForEdit } from '../input-for-edit/input-for-edit';
import { AppContext } from '../../../../context';

export const EditAndDelete = ({ id, complete, title }) => {
	const [edit, setEdit] = useState(false);
	let valueEdit = useRef('');
	const updateVlueEdit = (value) => (valueEdit.current = value);
	const { update, setUpdate } = useContext(AppContext);

	const onChecked = () => {
		let isComplete = null;
		if (complete) {
			isComplete = false;
		} else {
			isComplete = true;
		}

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				complete: isComplete,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('PATCH:', response);
				setUpdate(!update);
			});
	};

	const onEdit = () => {
		setEdit(!edit);
		if (edit && valueEdit.current !== '') {
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: valueEdit.current,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					console.log('PATCH:', response);
					setUpdate(!update);
					valueEdit.current = '';
				});
		}
	};

	const onDelete = () => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('DELETE:', response);
				setUpdate(!update);
			});
	};

	return (
		<span>
			{edit ? (
				<InputForEdit title={title} updateVlueEdit={updateVlueEdit} />
			) : (
				<span className={style.title}>{title}</span>
			)}
				<input
				className={style.checkBox}
				type="checkbox"
				checked={complete}
				onChange={onChecked}
			/>
			<button className={style.btn} onClick={onEdit}>{edit ? '✔' : '✎'}</button>
			<button className={style.btn} onClick={onDelete}>✂</button>
		</span>
	);
};
