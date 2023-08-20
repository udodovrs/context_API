import style from './todos-area.module.css';
import { EditAndDelete } from './components/edit_and_delete/edit-and-delete';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../actions/get-todos';
import { useEffect } from 'react';

export const TodosArea = ({ valueForSearch }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: 'isLoading' });
		dispatch(getTodo);
	}, [dispatch]);
	const todos = useSelector((state) => state.todosState.todos);
	const sortAZ = useSelector((state) => state.assitState.sortAZ);
	const isLoading = useSelector((state) => state.todosState.isLoading);

	let filterTodo = null;
	if (sortAZ) {
		filterTodo = [...todos]
			.sort((a, b) => {
				const titleA = a.title.toLowerCase();
				const titleB = b.title.toLowerCase();
				if (titleA < titleB) return -1;
				if (titleA > titleB) return 1;
				return 0;
			})
			.filter(({ title }) => {
				return title.toLowerCase().includes(valueForSearch.toLowerCase());
			});
	} else {
		filterTodo = todos.filter(({ title }) => {
			return title.toLowerCase().includes(valueForSearch.toLowerCase());
		});
	}

	return (
		<div className={style.wrapper}>
			{isLoading
				? 'Loading...'
				: filterTodo.map(({ id, title, complete }) => (
						<div className={style.todo} key={id}>
							<span className={complete ? style.green : style.gray}></span>
							<EditAndDelete id={id} title={title} complete={complete} />
						</div>
				  ))}
		</div>
	);
};
