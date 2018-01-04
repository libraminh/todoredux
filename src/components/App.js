import React from "react";
import TodoForm from './todo-form';
import TodoList from './todo-list';
import TodoFilter from './todo-filter';

export default class App extends React.Component {
    componentWillMount() {
        document.title = 'Libra';
    }
    
    componentDidMount() {
        $(window).load(() => {
            $("#preloader").fadeOut(800);
        });
        $(window).ready(() => {
            setTimeout(() => {
                $("#preloader").fadeOut(800);
            }, 25000);
        });
        console.log(process.env.API_URL);
    }
    render() {
        return (
            <div className="well well-test">
                App component
                <TodoForm />
                <TodoList />
                <TodoFilter />
            </div>
        );
    }
}
