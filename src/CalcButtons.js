import React from 'react';
import OperatorButtons from './OperatorButtons';
import EqualButton from './EqualButton';
import Button from './Button';
import TopRowButtons from './TopRowButtons';

const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const CalcButtons = (props) => {
    return (
        <div id='calcButtons'>
            <TopRowButtons 
                removeLastNum = {props.removeLastNum}
                resetAll = {props.resetAll}
                resetCurrentVal = {props.resetCurrentVal}
                setOperator = {props.setOperator}
            />
            <div id='keypad'>
                <div id = 'digitContainer' > 
                    {digits.map((num, i) => {
                        return (
                            <Button key = { `digitKey-${num}`}
                            handleClick = {() => props.displayNum(num)}
                            buttonText = {num}
                        />)
                    })} 
                    <Button handleClick = { () => props.addDecimal() }
                        buttonText = {'.'}
                    /> 
                    <EqualButton 
                        handleEquals = {props.handleEquals}
                    /> 
                </div> 
                <div id='sideButtons'>
                    <OperatorButtons 
                        setOperator = {props.setOperator}
                    /> 
                   
                </div> 
            </div>
        </div>
    );
}
export default CalcButtons;