import { TodoTypes } from '../actions/TodoActions';

const todos = [
    { text: "Go gym", id: 1, done: 1 },
    { text: "Go bed", id: 2, done: 0 },
    { text: "Go home", id: 3, done: 1 }
]

export const reducerTodoList = (state = todos, action) => {
    switch (action.type) {
        case TodoTypes.ADD_TODO:
            return [...state, action.item];

        case TodoTypes.TOGGLE_TODO:
            // return [...state, todos.map(todo => (todo.id === action.id) ? { ...todo, done: !todo.done } : todo)]
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case TodoTypes.REMOVE_TODO:
            return state.filter(x => (x.id !== action.id));

        default:
            return state
    }
}