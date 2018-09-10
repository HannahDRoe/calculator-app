import React from 'react';
import Button from './Button';

const EqualButton = (props) =>{
    return (
        <Button 
            handleClick = {()=> props.handleEquals()}
            buttonText ={'='}
        />
    )
}

export default EqualButton;