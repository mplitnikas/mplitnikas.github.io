import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import songList from './reducers/songList';

ReactDOM.render(
  <Provider 
    store={createStore(
      songList,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    }
  >
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
