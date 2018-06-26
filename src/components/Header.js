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
                                <input className="form-control" placeholder="To Do list" type="text"
                                       onChange={this.props.input_change} style={{margin: '5%'}}/>
                                <button type="submit" className="btn btn-info">Add Todo</button>
                            </label>
                        </form>
                    </div>
                </div>
        )
    }
}
