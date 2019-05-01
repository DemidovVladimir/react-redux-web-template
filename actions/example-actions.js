export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    INCREMENT_ASYNC: 'INCREMENT_ASYNC',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    GET_POSTS: 'GET_POSTS',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    API_FAIL: 'API_FAIL'
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
    return setInterval(() => {
        dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}

export const incrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.INCREMENT })
}

export const incrementAsyncCount = () => dispatch => {
    return dispatch({ type: actionTypes.INCREMENT_ASYNC})
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: actionTypes.RESET })
}

export const getPosts = () => dispatch => {
    return dispatch({type: actionTypes.GET_POSTS})
}

export const getPostsSuccess = data => dispatch => {
    return dispatch({type: actionTypes.GET_POSTS_SUCCESS, payload: data})
}

export const getPostsError = error => dispatch => {
    return dispatch({type: actionTypes.API_FAIL, payload: error})
}