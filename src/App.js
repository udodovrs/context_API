import { useState, useEffect } from 'react';
import style from './App.module.css';
import { TodosArea } from './components/todos_area/todos-area';
import { ControlPanel } from './components/control_panel/control-panel';
import { NewTodo } from './components/new_todo/new-todo';
import { AppContext } from './context';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [update, setUpdate] = useState(false);
	const [valueForSearch, setValueForSearch] = useState('');
	const [sortAZ, setSortAZ] = useState(false);

	const updateValueForSearch = (value) => setValueForSearch(value);

	useEffect(() => {
		setisLoading(true);
		fetch('http://localhost:3005/todos')
			.then((res) => res.json())
			.then((res) => setTodos(res))
			.catch((error) => console.error(error))
			.finally(() => setisLoading(false));
	}, [update]);

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

	const upadteData = { update: update, setUpdate: setUpdate };

	return (
		<AppContext.Provider value={upadteData}>
			<div className={style.wrapper}>
				<ControlPanel
					updateValueForSearch={updateValueForSearch}
					sortAZ={sortAZ}
					setSortAZ={setSortAZ}
				/>
				<TodosArea
					arr={filterTodo}
					isLoading={isLoading}
				/>
				<NewTodo />
			</div>
		</AppContext.Provider>
	);
};
