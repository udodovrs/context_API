const initial_assist = {
	sortAZ: false,
	edit: false,
	isNewTodo: false,
};

export const assistReducer = (state = initial_assist, actions) => {
	const { type, payload } = actions;
	switch (type) {
		case 'sortAZ':
			return { ...state, sortAZ: payload };
		case 'edit':
			return { ...state, edit: payload };
		case 'isNewTodo':
			return { ...state, isNewTodo: payload };
		default:
			return state;
	}
};
