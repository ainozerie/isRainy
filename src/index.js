import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);