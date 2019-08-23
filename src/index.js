import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from './reducers';
import ReactDOM from 'react-dom';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
