//import {createStore, applyMiddleware} from 'redux';

import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import reducer from './Reducers';

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;