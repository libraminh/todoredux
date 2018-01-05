import { TodoTypes, TodoFilterType } from 'actions/TodoActions';

const todos = {
    statusFilter: TodoFilterType.SHOW_ALL,
    listItem: [
        { text: "Go gym", id: 1, done: 1 },
        { text: "Go bed", id: 2, done: 0 },
        { text: "Go home", id: 3, done: 1 }
    ]
}

export const reducerTodoList = (state = todos, action) => {
    switch (action.type) {
        case TodoTypes.ADD_TODO:
            return { ...state, listItem: [...state.listItem, action.item] }

        case TodoTypes.TOGGLE_TODO:
            // return [...state, todos.map(todo => (todo.id === action.id) ? { ...todo, done: !todo.done } : todo)]
            // return state.map(todo =>
            //     (todo.id === action.id)
            //         ? { ...todo, done: !todo.done }
            //         : todo
            // );

            return { ...state, listItem: state.listItem.map(todo => (todo.id === action.id) ? { ...todo, done: !todo.done } : todo) }

        case TodoTypes.REMOVE_TODO:
            // return state.filter(x => (x.id !== action.id));
            return { ...state, listItem: state.listItem.filter(x => (x.id !== action.id)) };

        case TodoTypes.STATUS_FILTER:
            return { ...state, statusFilter: action.status };

        case TodoTypes.CHECK_ALL:
            return { ...state, listItem: state.listItem.map(todo => ({ ...todo, done: 1 })) };

        case TodoTypes.UNCHECK_ALL:
            return { ...state, listItem: state.listItem.map(todo => ({ ...todo, done: 0 })) };

        case TodoTypes.CLEAR_ALL:
            return { ...state, listItem: [] };

        default:
            return state
    }
}