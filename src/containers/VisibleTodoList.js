import { connect } from "react-redux";
import { toggleTodo } from "../actions/TodoActions";
import TodoList from "../components/TodoList";
import { FilterTypes } from "../actions/ActionTypes";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.SHOW_ALL:
            return todos;
        case FilterTypes.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case FilterTypes.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
