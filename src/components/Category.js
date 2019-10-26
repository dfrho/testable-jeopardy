import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  render () {
    return (
      <div>
        <Link to = '/'><h4>Home</h4></Link>
        <h2>Category Title!</h2>
      </div>
    );
  }
}
