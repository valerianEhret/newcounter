import {ACTION_TYPE, ActionsType} from "./actions";


//types
type CounterStateType = {
    startValue:number
    maxValue:number
    currentValue:number
}

export type StateType = {
    counterState:CounterStateType
    change:boolean
}

//initial State
export const initialState:StateType = {
    counterState: {
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
    },
    change:false,
}


// Reducers

export const counterReducer = (state:StateType = initialState, action:ActionsType ):StateType =>{
    switch (action.type) {
        case ACTION_TYPE.INCREMENT_VALUE: {
            return {...state, counterState:{...state.counterState, currentValue:state.counterState.currentValue+1} }
        }

        case ACTION_TYPE.RESET_SET_VALUE: {
            return {...state, counterState:{...state.counterState, currentValue:state.counterState.startValue}, change:false}
        }

        case ACTION_TYPE.CHANGE_MAX_VALUE:{
            return {...state, counterState:{...state.counterState, maxValue:action.maxValue}, change:true}
        }

        case ACTION_TYPE.CHANGE_START_VALUE: {
            return {...state, counterState: {...state.counterState, startValue:action.startValue}, change:true}
        }

        default:
            return state;
    }
}