import React from 'react';
import { InputStyled } from './style';

interface InputProps {
    type: string,
    name: string
}

export const Input = (props : InputProps) => {
    return (
        <InputStyled />
    )
}