import React from 'react';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteTodo = (todoId) => {
        this.props.onDeleteTodo(todoId)
    }

    renderList = () => {
        return this.props.todos.valueSeq().reverse().map(todo => (
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button id="btn" onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
        ))
    }

    render() {
        return (
            <section id="main">
              <ul id="todos">
                {this.renderList()}
              </ul>
            </section>
        );
    }
  }