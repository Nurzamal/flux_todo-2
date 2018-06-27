import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


export default function App(props) {
  return (
    <div>
      <Header {...props} />
      <Main   {...props} />
      <Footer {...props} />
    </div>
  );
}

/* export function Header(props) {
  let input
  return (
    <header id="header">
      <h1>To Do list</h1>
      <form onSubmit={function(e){
          e.preventDefault()
          props.onCreateTodo(input.value)
           input.value = ''
        }}>
        <input
          ref={node => {
            input = node
          }}
        />
          <button type="submit"> Add Todo </button>
      </form>
    </header>
  );
} */

/* export function Main(props) {
  return (
    <section id="main">
      <ul id="todos">
        {props.todos.valueSeq().reverse().map(todo => {
          return (
            <li key={todo.id}>
                <span>{todo.text}</span>
              <button id="btn" onClick={function(e){
                  e.preventDefault()
                  props.onDeleteTodo(todo.id)
                }}>
                delete
              </button>
            </li>
          )
        })
      }
      </ul>

        <button id="btn1" onClick={function(e){
            e.preventDefault()
            props.onGetTodos()
        }}>
            Get todos from API
        </button>

    </section>
  );
} */

/* export function Footer(props) {
  const remaining = props.todos.size;
  const phrase = remaining === 1 ? ' more job left' : ' more jobs left';

  const handleEvent = () => {
    props.onGetTodos();
  }

  return (
    <footer id="footer">
      <div>
        <button id="btn-all" onClick={handleEvent}>
          {'Get Todos from Api'}
        </button>
      </div>
      <div id="items">
        <strong> {remaining} </strong> {phrase}
      </div>
    </footer>
  );
} */
