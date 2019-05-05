import { put, all, call, take } from 'redux-saga/effects';
import {fetchPostsAPI} from "../api";

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
        fetchPosts()
    ])
}