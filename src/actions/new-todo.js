export const newTodo = (value) => {
	return (dispatch) => {
		return fetch(`http://localhost:3005/todos`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
				complete: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) =>
				dispatch({
					type: 'newTodo',
					payload: response,
				}),
			);
	};
};
