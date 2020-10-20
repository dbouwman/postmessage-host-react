import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { restoreSession } from './utils/session';
import * as serviceWorker from './serviceWorker';

// read the user's previous session (if any) from a cookie
// and pass that into the application
const previousSession = restoreSession();

ReactDOM.render(
  <React.StrictMode>
    <App previousSession={previousSession} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
