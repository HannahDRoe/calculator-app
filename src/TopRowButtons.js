import React from 'react';
import Button from './Button';


const TopRowButtons = (props) =>{
    return (
        <div>
            <Button 
                handleClick = {()=> props.removeLastNum()}
                buttonText ={'\u21e6'}
            />
            <Button 
                handleClick = {() => props.resetAll()}
                buttonText = {'AC'}
            />
            <Button 
              handleClick = {() => props.resetCurrentVal()}
              buttonText = {'C'}
            />
            <Button
                handleClick = {() => props.setOperator('%')}
                buttonText = {'%'}
            />
            <Button
                handleClick = {() => props.setOperator('√')}
                buttonText = {'√'}
            />

        </div>
    )
}

export default TopRowButtons;