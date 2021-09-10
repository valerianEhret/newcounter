import React from 'react';
import './App.css';
import {Display} from "./Display/Display";

import {useSelector} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, incrementValueAC, resetSetValueAC} from "./redux/actions";
import {StateType} from "./redux/reducer";
import {AppRootStateType} from "./redux/store";
import {SettingsDisplay} from "./common/SettingsDisplay/SettingsDisplay";
import {Button} from "./common/Button/Button";

function App() {
    //тип экспортируется из StoreRedux, а второй тип это тип инициализационного стейта, параметры callback state => state.counter
    // типизация useSelectora 1 параметр это тип Стора полыйчный из редьюсера, вторым параметром, то что он возвращает, типизация иницилазционного стейта.
    const counter = useSelector<AppRootStateType, StateType>( state=>state.counter)

    const disableSetButton = counter.counterState.startValue < 0 || counter.counterState.maxValue < 0 || counter.counterState.startValue >= counter.counterState.maxValue

    const disableIncButton =
        counter.change ||
        counter.counterState.currentValue === counter.counterState.maxValue

    const disableResetButton = counter.change || counter.counterState.currentValue === counter.counterState.startValue



    return (
        <div className="container">
                <div className="counter">
                    {/*<div className="display">*/}
                        <Display state={counter}/>
                    {/*</div>*/}
                    <div className="display-buttons">
                        <Button buttonTitle={'INC'} buttonDisabled={disableIncButton} actionCreator={incrementValueAC}/>
                        <Button buttonTitle={'RESET'} buttonDisabled={disableResetButton} actionCreator={resetSetValueAC}/>
                    </div>

                </div>
                <div className="settings">
                    <SettingsDisplay title={'START VALUE'} state={counter} actionCreator={changeStartValueAC} value={counter.counterState.startValue} />
                    <SettingsDisplay title={'MAX VALUE'}  state={counter} actionCreator={changeMaxValueAC} value={counter.counterState.maxValue}/>
                    <Button buttonTitle={'SET'} buttonDisabled={disableSetButton} actionCreator={resetSetValueAC}/>
                </div>
        </div>
    );
}

export default App;
