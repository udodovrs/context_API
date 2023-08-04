import style from './todos-area.module.css';
import { EditAndDelete } from './components/edit_and_delete/edit-and-delete';

export const TodosArea = ({ arr, isLoading }) => {
	return (
		<div className={style.wrapper}>
			{isLoading
				? 'Loading...'
				: arr.map(({ id, title, complete }) => (
						<div className={style.todo} key={id}>
							<span className={complete ? style.green : style.gray}></span>
							<EditAndDelete
								id={id}
								title={title}
								complete={complete}
							/>
						</div>
				  ))}
		</div>
	);
};
