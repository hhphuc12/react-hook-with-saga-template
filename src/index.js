import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './06-containers/App';
import store from './store';
import { unregister } from './serviceWorker';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    /*eslint-disable-next-line*/
    document.getElementById('root')
);

unregister();
