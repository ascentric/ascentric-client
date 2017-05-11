/**
 * The entry point that will be called by webpack.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Import stylesheets
require('../style/style.css');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root'),
);
