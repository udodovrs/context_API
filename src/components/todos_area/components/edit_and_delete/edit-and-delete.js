import style from './edit-and-delete.module.css';
import { useRef, useState } from 'react';
import { InputForEdit } from '../input-for-edit/input-for-edit';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../actions/delete-todo';
import { editTitleTodo } from '../../../../actions/edit-title-todo';
import { editCompleteTodo } from '../../../../actions/edit-complete-todo';

export const EditAndDelete = ({ id, complete, title }) => {
	const [edit, setEdit] = useState(false);
	let valueEdit = useRef('');
	const updateVlueEdit = (value) => (valueEdit.current = value);

	const dispatch = useDispatch();

	const onChecked = () => {
		let isComplete = null;
		if (complete) {
			isComplete = false;
		} else {
			isComplete = true;
		}
		dispatch({ type: 'loading' });
		dispatch(editCompleteTodo(isComplete, id));
	};

	const onEdit = () => {
		setEdit(!edit);
		if (edit && valueEdit.current !== '') {
			dispatch({ type: 'loading' });
			dispatch(editTitleTodo(valueEdit, id));
		}
	};

	const onDelete = () => {
		dispatch({ type: 'loading' });
		dispatch(deleteTodo(id));
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
			<button className={style.btn} onClick={onEdit}>
				{edit ? '✔' : '✎'}
			</button>
			<button className={style.btn} onClick={onDelete}>
				✂
			</button>
		</span>
	);
};
