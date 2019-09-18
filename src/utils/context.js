import React, { useReducer } from "react";

const initialState = {
	todos: [{
		name: 'Learn React',
		status: 'done',
	}, {
		name: 'Drink Coffee',
		status: 'in progress',
	}, {
		name: 'Investigate React hooks',
		status: 'not started yet',
	}]
};

const AppContext = React.createContext([initialState, () => {
}]);

function reducer (state, action) {
	switch (action.type) {
		case 'add':
			return { todos: [...state.todos, action.value] };
		case 'remove':
			return { todos: state.todos.filter((todo) => todo.name !== action.value) };
		case 'update status':
			return {
				todos: state.todos.map((todo) => {
					if (todo.name === action.value.name) {
						todo = action.value;
					}
					return todo;
				})
			};
		default:
			throw new Error();
	}
}

const AppContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={[state, dispatch]}>
			{props.children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
