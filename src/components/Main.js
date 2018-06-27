import React from 'react';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteTodo = (e) => {
        this.props.onDeleteTodo(e.target.id)
    }

    renderList = () => {
        return this.props.todos.valueSeq().reverse().map(todo => (
            <li id={todo.id}>
                <span>{todo.text}</span>
                <button id={todo.id} onClick={this.deleteTodo}>Delete</button>
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
