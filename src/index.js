import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appReducers from './reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store =createStore (
  
  appReducers,

  enhancer
  
  

)


ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store} >
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


