import React from 'react'

export default class TodoAdd extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container">
                    <div className="container text-center">
                        <form onSubmit={this.props.addTodo}>
                            <label>
                                <h1>To Do list</h1>
                                <input className="form-control" placeholder="Enter a note" type="text"
                                       onChange={this.props.input_change}/>
                                <button type="submit" className="btn btn-info">Add Todo</button>
                            </label>
                        </form>
                    </div>
                </div>
        )
    }
}
