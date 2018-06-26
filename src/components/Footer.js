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
      <ul>
      {todos.map(todo =>
        <div key={todo.id}>
          <Todo todo={todo} onClick={onTodoClick}/>
          <button onClick={()=>{onDeleteTodo(todo.id)}}>delete</button>
        </div>
      )}
    </ul>
        <button id="formSubmit" className="btn-all" name="submitButton" onClick={this.handleClick}> Get todos from API</button>
      </div>
    );
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
  }
}
