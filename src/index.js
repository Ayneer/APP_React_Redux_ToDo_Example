import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Redux/reducer';

import * as serviceWorker from './serviceWorker';

const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
