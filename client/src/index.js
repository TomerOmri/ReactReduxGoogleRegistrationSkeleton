import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

// create store ( Reducer , Initial state of my application , apply middleware code )
const store = createStore( reducers , {} , applyMiddleware());


ReactDOM.render( 
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root') 
); 