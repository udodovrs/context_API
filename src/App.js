import { useState } from 'react';
import style from './App.module.css';
import { TodosArea } from './components/todos_area/todos-area';
import { ControlPanel } from './components/control_panel/control-panel';
import { NewTodo } from './components/new_todo/new-todo';

export const App = () => {
	const [valueForSearch, setValueForSearch] = useState('');
	const updateValueForSearch = (value) => setValueForSearch(value);

	return (
			<div className={style.wrapper}>
				<ControlPanel
					updateValueForSearch={updateValueForSearch}
				/>
				<TodosArea valueForSearch={valueForSearch}/>
				<NewTodo />
			</div>

	);
};
