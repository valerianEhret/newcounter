import {
    changeMaxValueAC,
    changeStartValueAC,
    incrementValueAC,
    resetSetValueAC,
} from "./actions";
import {counterReducer, StateType} from "./reducer";


test('currentCounterValue should be increased', ()=>{
//initial state
    const startState:StateType = {
        counterState: {
            startValue: 0,
            maxValue: 5,
            currentValue: 1,
        },
        change:false,
    }

//actions

    const endState = counterReducer(startState,incrementValueAC() )

// expectations

    expect(endState.counterState.currentValue).toBe(2)
    expect(endState.counterState.startValue).toBe(0)
    expect(endState.counterState.maxValue).toBe(5)
    expect(endState.change).toBe(false)
});

test('currentCounterValue should be changed to startValue', ()=>{
//initial state
    const startState:StateType = {
        counterState: {
            startValue: 0,
            maxValue: 5,
            currentValue: 1,
        },
        change:false,
    }

//actions

    const endState = counterReducer(startState,resetSetValueAC() )

// expectations

    expect(endState.counterState.currentValue).toBe(0)
    expect(endState.counterState.startValue).toBe(0)
    expect(endState.counterState.maxValue).toBe(5)
    expect(endState.change).toBe(false)
});

test('maxValue should be changed to setedMaxValue', ()=>{
//initial state
    const startState:StateType = {
        counterState: {
            startValue: 0,
            maxValue: 5,
            currentValue: 1,
        },
        change:false,
    }

    const newMaxValue  = 10;

//actions

    const endState = counterReducer(startState,changeMaxValueAC(newMaxValue) )

// expectations

    expect(endState.counterState.currentValue).toBe(1)
    expect(endState.counterState.startValue).toBe(0)
    expect(endState.counterState.maxValue).toBe(10)
    expect(endState.change).toBe(true)
});

test('startValue should be changed to setedMaxValue', ()=>{
//initial state
    const startState:StateType = {
        counterState: {
            startValue: 0,
            maxValue: 5,
            currentValue: 1,
        },
        change:false,
    }

    const newStartValue  = 2;

//actions

    const endState = counterReducer(startState,changeStartValueAC(newStartValue) )

// expectations

    expect(endState.counterState.currentValue).toBe(1)
    expect(endState.counterState.startValue).toBe(2)
    expect(endState.counterState.maxValue).toBe(5)
    expect(endState.change).toBe(true)
});