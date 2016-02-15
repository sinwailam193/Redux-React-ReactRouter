import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/app.react';
import Reducers from './reducers/root.reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(<Provider store={createStoreWithMiddleware(Reducers)}><App /></Provider>, document.getElementById('container'));
