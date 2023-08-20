export const deleteTodo = (id) => {
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() =>
				dispatch({
					type: 'delete',
					payload: id,
				}),
			);
	};
};
