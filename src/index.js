import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

