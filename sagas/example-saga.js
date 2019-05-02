import { put, all, call, take } from 'redux-saga/effects';
import {fetchPostsAPI} from "../api";

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* watchIncrementAsync() {
    while(true) {
        yield take('INCREMENT_ASYNC');
        yield put({ type: 'INCREMENT' })
    }
}

export function* fetchPosts() {
    try {
        while(true) {
            yield take('GET_USERS');
            const response = yield call(fetchPostsAPI);
            const data = yield call([response, response.json]);
            yield put({type: 'GET_USERS_SUCCESS', data});
        }
    } catch (e) {
        yield put({type: 'API_FAIL'});
    }
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        fetchPosts()
    ])
}