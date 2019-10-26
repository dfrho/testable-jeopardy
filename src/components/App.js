import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from '../actions';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount () {
    if (this.props.categories.length === 0) {
      fetch('http://jservice.io/api/categories?count=25')
        .then(response => response.json())
        .then(json => this.props.setCategories(json))
        .catch(error => console.error(error));
    }
  }

  render () {
    console.log('TCL: App -> render -> this.props', this.props);
    return (
      <div>
        <h2>Jeopardy!</h2>
        {this.props.categories.map(category => {
          return (
            <div key={category.id}>
              <Link>
                <h4>
                  {category.title}
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    categories: state
  };
}

export default connect(mapStateToProps, { setCategories })(App);
