import React from 'react';

class Header extends React.Component {
  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmit = (e) => {
    this.props.submit(this.state.input)
  }

  render() {
    return (
      <header id="header">
      <h1>To Do list</h1>
      <form>
        <input onChange={this.onChange} />
         <button id="formSubmit" name="submitButton" onClick={this.onSubmit}> Add Todo</button>
      </form>
    )
  }
   
