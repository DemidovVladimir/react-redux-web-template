import { put, all, call, take } from 'redux-saga/effects';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    while(true) {
        yield take('INCREMENT_ASYNC');
        yield call(delay, 2000)
        yield put({ type: 'INCREMENT' })
    }
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}