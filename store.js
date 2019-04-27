import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {exampleReducer} from "./reducers/example-reducer";

const reducer = combineReducers({
    example: exampleReducer,
});

export function initializeStore () {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
