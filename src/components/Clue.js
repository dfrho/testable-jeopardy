import React, { Component } from 'react';

export default class Clue extends Component {
  constructor (props) {
    super(props);

    this.state = {
      reveal: false
    };
  }

  handleClick(){
      this.setState({
          reveal: !this.state.reveal
      })
  }

  render () {
    const { value, question, answer } = this.props.clue;
    return (
      <div className={'clue'}>
        <h4>
          {value || 'bet value'}
        </h4>
        <hr />
        <h5 onClick={()=>this.handleClick()}>
          {question}
        </h5>
        <hr />
        <h5 className={this.state.reveal ? 'text-visible' : 'text-hidden'}>
          {answer}
        </h5>   
      </div>
    );
  }
}
