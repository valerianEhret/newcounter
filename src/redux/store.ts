import {combineReducers, createStore} from "redux"
import {counterReducer} from "./reducer";

//если несколько редюсеров то делаем кобайн
const rootReducer =  combineReducers(
    {
        counter:counterReducer,
        // next reducer
    }
)

// создаем тип стейта, отдаем в него рутовый редюсер
export type AppRootStateType = ReturnType<typeof rootReducer>


// создаем store, как аргумент  передаем редюсер
export const store = createStore(rootReducer)