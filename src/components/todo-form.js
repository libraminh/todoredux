import React, { Component } from 'react';
import { addTodo } from '../actions/TodoActions';
import { connect } from 'react-redux';

class TodoForm extends Component {

    handleSubmit(e) {
        e.preventDefault();

        let todoTask = $('input[name="addTodo"]');
        let todoTaskValue = todoTask.val();

        if (todoTaskValue === '') {
            alert('Please add todo');
            return false;
        }

        this.props.addTodo(todoTaskValue);

        todoTask.val('');
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)} action="" className="todo-form">
                    <div className="form-group">
                        <input name="addTodo" type="text" placeholder="Add Todo" className="form-control" />
                        <input type="submit" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTodo })(TodoForm);