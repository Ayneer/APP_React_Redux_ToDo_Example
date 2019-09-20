const initState = {
    todos: [
        { id: 1, context: "Make the bed" },
        { id: 2, context: "Clear the computer" }
    ]
}

const Reducers = (state = initState, action) => {
    if(action.type === "DELETE_TODO"){
        const todos = state.todos.filter(todo => {
            return todo.id !== action.id;
        });
        return {
            ...state,
            todos
        }
    }
    if(action.type === "ADD_TODO"){
        action.todo.id = Math.random();
        const todos = [...state.todos, action.todo];
        return {
            ...state,
            todos
        }
    }
    return state;

}

export default Reducers;