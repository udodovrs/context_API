export const editCompleteTodo = (isComplete, id) => {
	return (dispatch) => {
		return 	fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				complete: isComplete,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) =>
				dispatch({
					type: 'editTodo',
					payload: response,
				}),
			);
	};
};
