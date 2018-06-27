import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            remaining: props.todos.size
        }
    }

    handleEvent = () => {
      this.props.onGetTodos();
    }

    render() {
        const phrase = this.state.remaining === 1 ? ' more job left' : ' more jobs left';

        return (
            <footer id="footer">
              <div>
                <button id="btn-all" onClick={this.handleEvent}>Get Todos from Api</button>
              </div>
              <div id="items">
                <strong> {this.state.remaining} </strong> {phrase}
              </div>
            </footer>
          );
    }
}