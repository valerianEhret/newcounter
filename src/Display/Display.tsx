import React from 'react'
import {StateType} from "../redux/reducer";
import classes from './Display.module.css'

type DisplayPropsType = {
    state:StateType
}


export function Display(props:DisplayPropsType) {

    const change = props.state.change
    const startValue = props.state.counterState.startValue
    const maxValue = props.state.counterState.maxValue
    const currentValue = props.state.counterState.currentValue

    let value
    if (startValue<maxValue&&startValue>=0) {
        value = change? "Enter values and press 'set'":currentValue
    } else value = "incorrect value"


    return (
        <>
            <div className={classes.display}>
                <div className={classes.value}>
                    {value}
                </div>
            </div>
        </>
    )
}