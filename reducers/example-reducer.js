import {actionTypes} from '../actions/example-actions';

export const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
    data: null,
    error: null
}

// REDUCERS
export const exampleReducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })
        case actionTypes.GET_POSTS_SUCCESS:
            return {...state, data: action.payload}
        case actionTypes.API_FAIL:
            return {...state, error: action.payload}
        default:
            return state
    }
}