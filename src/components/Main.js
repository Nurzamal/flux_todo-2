import React from 'react'

export function Main(props) {
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
