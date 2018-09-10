import React from 'react';
import Button from './Button';

const OperatorButtons = (props) =>{
    return (
        <div id='operatorButtons'>
            <Button 
                handleClick = {()=> props.setOperator('+')}
                buttonText ={'+'}
            />
            <Button 
                handleClick = {()=> props.setOperator('-')}
                buttonText ={'-'}
            />
            <Button 
                handleClick = {()=> props.setOperator('*')}
                buttonText ={'x'}
            />
            <Button 
                handleClick = {()=> props.setOperator('/')}
                buttonText ={'/'}
            />
        </div>
    );
}
export default OperatorButtons;