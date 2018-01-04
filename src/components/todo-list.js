import React, { Component } from 'react';
import { toggleTodo, removeTodo } from '../actions/TodoActions';
import { connect } from 'react-redux';

class TodoList extends Component {

    removeList(e, id) {
        this.props.removeTodo(id);
        e.preventDefault();
    }

    handleTodo() {
        return this.props.todos.map(todo => {
            return (
                <li key={todo.id} className={`list-group-item ${todo.done ? "done" : ""}`}>
                    <span onClick={(e) => this.handleClick(e, todo.id)}>{todo.id}. {todo.text}</span>
                    <a onClick={e => this.removeList(e, todo.id)} href="#" className="btn btn-danger">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                </li>
            )
        })
    }

    handleClick(e, id) {
        this.props.toggleTodo(id);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.handleTodo()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todoItem
    }
}

export default connect(mapStateToProps, { toggleTodo, removeTodo })(TodoList);