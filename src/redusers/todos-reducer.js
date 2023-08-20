const initial_todo = {
	todos: [],
	isLoading: true,
};

export const todosReducer = (state = initial_todo, actions) => {
	const { type, payload } = actions;

	switch (type) {
		case 'initial':
			return { ...state, todos: [...payload], isLoading: false };
		case 'newTodo':
			return {
				...state,
				todos: [...state.todos, { ...payload }],
				isLoading: false,
			};
		case 'delete':
			return {
				...state,
				todos: [...state.todos.filter(({ id }) => id !== payload)],
				isLoading: false,
			};
		case 'editTodo':
			return {
				...state,
				todos: [
					...state.todos.map(({ id, title, complete }) => {
							if (id === payload.id) {
							title = payload.title;
							complete = payload.complete;
						}
						return {id, title, complete}
					}),
				],
				isLoading: false,
			};
		case 'loading':
			return { ...state, isLoading: true };
		default:
			return state;
	}
};
