import React, {ChangeEvent} from 'react';
import classes from "./SettingsDisplay.module.css";
import {Dispatch} from "redux";
import {ActionsType} from "../../redux/actions";
import {StateType} from "../../redux/reducer";
import {useDispatch} from "react-redux";


type SettingsDisplayType = {
    state:StateType
    actionCreator:Function
    title:string
    value:number
}

export function SettingsDisplay(props:SettingsDisplayType) {

    const dispatch = useDispatch<Dispatch<ActionsType>>()


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        const action = props.actionCreator(value)
        dispatch(action)
    }

    return (
        <div>
            {props.title}:  <input  type = "number"
                                 className={props.state.counterState.maxValue > props.state.counterState.startValue && props.state.counterState.startValue>=0 ? "":classes.redError}
                                 onChange={ onChangeHandler}
                                 value={props.value}
        />
        </div>
    )
}