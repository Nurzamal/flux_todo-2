import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreateTodo(this.state.input)
        this.setState({
            input: ''
        });
    }

    handelChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    render () {
        return (
            <header id="header">
                <h1>To Do list</h1>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handelChange} value={this.state.input} />
                <button type="submit">Add Todo</button>
                </form>
            </header>
        )
    }
  }