import React from 'react';

export function Header(props) {
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
}