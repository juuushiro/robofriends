import React from 'react';
import ReactDOM from 'react-dom';
import {createLogger } from 'redux-logger'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './components/reducers'


const logger = createLogger;
const rootReducer = combineReducers ({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
    <provider store={store}>
    <App />
    </provider>, document.getElementById('root'));
registerServiceWorker();
