import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {dbReducer} from "./reducers/db-reducers";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/example-saga';

const reducer = combineReducers({
    dbclient: dbReducer,
});

export function initializeStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                sagaMiddleware,
                logger
            )
        )
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store
}

