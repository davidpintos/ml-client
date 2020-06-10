import React from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {getRoutes} from './routes';
import { createBrowserHistory } from 'history';

import reducer from './reducers/index';

import './components/General.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(reducer, composeWithDevTools());

        this._history = syncHistoryWithStore(createBrowserHistory(), this._store);
    }

    render() {
        const routes = getRoutes();

        return (
            <Provider store={this._store}>
                <Router history={this._history}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}
