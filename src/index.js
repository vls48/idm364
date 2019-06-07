import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import obey from './img/obey.jpg'; 

ReactDOM.render( 
    <Router basename={process.env.PUBLIC_URL}>
        <div className="content" style={{backgroundImage: `url(${obey})`}}>
            {console.log('obey: ' + obey)}
            <App />
        </div>
    </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
