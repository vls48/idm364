import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <Router basename={process.env.PUBLIC_URL}>
        <div className="content">
            <App />
        </div>
    </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
