export const getTodo = (dispatch)=>
fetch('http://localhost:3005/todos')
.then((res) => res.json())
.then((res =>   dispatch({
	type: 'initial',
	payload: res,
})))
.catch((error) => console.error(error))
