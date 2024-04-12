import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store 
    = createStore(rootReducer, applyMiddleware(thunk, logger))

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// serviceWorkerRegistration.unregister();
