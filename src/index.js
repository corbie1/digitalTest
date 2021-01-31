import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { history } from './history.js'
import store from './store/store'





ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <HashRouter {...{ history }}>
        {routes}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

