import React from 'react';
import {ActionsType} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";


type ButtonPropsType = {
    buttonTitle: string
    buttonDisabled: boolean
    actionCreator:()=>ActionsType

}


export function Button(props: ButtonPropsType) {


    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const onClickButton = () => {
        dispatch(props.actionCreator())
    }


    return (
        <div>
            <button onClick={onClickButton}
                    disabled={props.buttonDisabled}
            >
                {props.buttonTitle}
            </button>
        </div>
    )
}