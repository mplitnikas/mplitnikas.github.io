import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import songs from './reducers/songs';

const reducer = combineReducers({songs});

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
