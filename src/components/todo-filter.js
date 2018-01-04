import React, { Component } from 'react';

class TodoFilter extends Component {
    render() {
        return (
            <div>
                <ul className="todo-fitler list-unstyled">
                    Filter:
                    <li>All: (2)</li>
                    <li>Done: (2)</li>
                    <li>UnDone: (2)</li>
                </ul>
            </div>
        );
    }
}

export default TodoFilter;