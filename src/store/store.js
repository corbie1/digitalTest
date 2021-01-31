import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

// Components
const composeEnhancers = typeof window === 'undefined' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);




export default store;