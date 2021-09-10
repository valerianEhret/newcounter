import {combineReducers, createStore} from "redux"
import {counterReducer} from "./reducer";

const rootReducer =  combineReducers(
    {
        counter:counterReducer,
        // next reducer
    }
)

export type AppRootStateType = ReturnType<typeof rootReducer>


let preloadedState
const persistedStateString = localStorage.getItem('app-state')
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}


export const store = createStore(rootReducer, preloadedState)

store.subscribe( ()=>{
    // при изменении стейта это код будет отрабатываться
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
} )




