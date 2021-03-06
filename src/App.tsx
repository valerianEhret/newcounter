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
    const counter = useSelector<AppRootStateType, StateType>( state=>state.counter)

    const disableSetButton = counter.counterState.startValue < 0 || counter.counterState.maxValue < 0 || counter.counterState.startValue >= counter.counterState.maxValue

    const disableIncButton =
        counter.change ||
        counter.counterState.currentValue === counter.counterState.maxValue

    const disableResetButton = counter.change || counter.counterState.currentValue === counter.counterState.startValue



    return (
        <div className="container">
                <div className="counterBlock">
                        <Display state={counter}/>
                    <div className="buttons">
                        <Button buttonTitle={'INC'} buttonDisabled={disableIncButton} actionCreator={incrementValueAC}/>
                        <Button buttonTitle={'RESET'} buttonDisabled={disableResetButton} actionCreator={resetSetValueAC}/>
                    </div>

                </div>
                <div className="settingsBlock">
                    <div className="settings">
                        <SettingsDisplay title={'START VALUE'} state={counter} actionCreator={changeStartValueAC} value={counter.counterState.startValue} />
                        <SettingsDisplay title={'MAX VALUE'}  state={counter} actionCreator={changeMaxValueAC} value={counter.counterState.maxValue}/>
                    </div>
                    <div className="buttons">
                        <Button buttonTitle={'SET'} buttonDisabled={disableSetButton} actionCreator={resetSetValueAC}/>
                    </div>

                </div>
        </div>
    );
}

export default App;
