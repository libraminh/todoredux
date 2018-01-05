import React, { Component } from 'react';
import { filterTodo, TodoFilterType, checkAll, clearAllTodo } from 'actions/TodoActions.js';
import { connect } from 'react-redux';

class TodoFilter extends Component {

    handleFilter(e, status) {
        this.props.filterTodo(status);
    }

    checkAll(e, status) {
        this.props.checkAll(status);
    }

    clearAll() {
        this.props.clearAllTodo();
    }

    render() {

        const listItem = this.props.task.listItem;
        const countAll = listItem.length;
        const countDone = listItem.filter(x => x.done).length;
        const countUndone = countAll - countDone;
        return (
            <div>
                <ul className="todo-fitler list-unstyled">
                    Filter:
                    <li onClick={e => this.handleFilter(e, TodoFilterType.SHOW_ALL)}> All ({countAll})</li>
                    <li onClick={e => this.handleFilter(e, TodoFilterType.SHOW_DONE)}>Done ({countDone})</li>
                    <li onClick={e => this.handleFilter(e, TodoFilterType.SHOW_UNDONE)}>UnDone ({countUndone})</li>
                    <li onClick={e => this.checkAll(e, 1)}> Check All</li>
                    <li onClick={e => this.checkAll(e, 0)}> UnCheck All</li>
                    <li onClick={e => this.clearAll(e)}>Clearn All</li>
                </ul>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        task: state.todoItem
    }
}

export default connect(mapStateToProps, { filterTodo, checkAll, clearAllTodo })(TodoFilter);