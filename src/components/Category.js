import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Category extends Component {
  constructor () {
    super();
    this.state = {
      clues: {}
    };
  }

  componentDidMount () {
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ clues: data });
      });
  }

  render () {
    console.log('TCL: Category -> constructor -> this.state', this.state);
    const { clues } = this.state;
    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h2 className='category-title-home'>
          {this.props.category.title}!
        </h2>
        {
          clues.length > 0 && clues.map((clue) => {
            return (
              <div key={clue.id}>{clue.question}</div>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    category: state.category
  };
}

export default connect(mapStateToProps, null)(Category);
