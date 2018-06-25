import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);

   handleClick = (e) => {
  this.setState({ clickedSubmit: e.target.id },() => {
    console.log(this.state.clickedSubmit)
  });
}

//in the render
  render() {
    return (
      <div>
        <button id="formSubmit" className="btn-all" name="submitButton" onClick={this.handleClick}> Get todos from API</button>
      </div>
    );
  }
}
