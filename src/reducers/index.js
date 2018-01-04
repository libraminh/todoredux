import { combineReducers } from 'redux';
import { reducerTodoList } from './reducer-todo';

const allReducers = combineReducers({
    todoItem: reducerTodoList
})

export default allReducers;