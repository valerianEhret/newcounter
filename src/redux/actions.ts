
// enum Action type
export enum ACTION_TYPE {
    INCREMENT_VALUE = "INCREMENT_VALUE",
    RESET_SET_VALUE = "RESET_SET_VALUE",
    CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE",
    CHANGE_START_VALUE = "CHANGE_START_VALUE",
}

// Action Types
export type IncrementValueActionType = {
    type: ACTION_TYPE.INCREMENT_VALUE
}

export type ResetSetValueActionType = {
    type:ACTION_TYPE.RESET_SET_VALUE
}

export type ChangeMaxValueActionType = {
    type: ACTION_TYPE.CHANGE_MAX_VALUE
    maxValue:number
}

export type ChangeStartValueActionType = {
    type: ACTION_TYPE.CHANGE_START_VALUE
    startValue:number
}

// General Action Type
export type ActionsType =
    IncrementValueActionType
    | ResetSetValueActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType


// ActionCreators
export const incrementValueAC = ():IncrementValueActionType => {
    return {type:ACTION_TYPE.INCREMENT_VALUE}
}

export const resetSetValueAC = ():ResetSetValueActionType => {
    return {type:ACTION_TYPE.RESET_SET_VALUE}
}

export const changeMaxValueAC = (maxValue:number):ChangeMaxValueActionType => {
    return {type:ACTION_TYPE.CHANGE_MAX_VALUE, maxValue}
}

export const changeStartValueAC = (startValue:number):ChangeStartValueActionType => {
    return {type:ACTION_TYPE.CHANGE_START_VALUE, startValue}
}