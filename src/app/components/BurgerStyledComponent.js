"use client"
import styled from 'styled-components'
import React from 'react'

export default function BurgerStyledComponent() {

    const BurgerIcon = styled.div`
        &{
            width: 30px;
            height: 4px;
            background: var(--clr-theme-yellow);
            transition: all .5s ease-in-out;
        }
        &:after{
            transform: translateY(10px);
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background: var(--clr-theme-yellow);
            transition: all .5s ease-in-out;
        }
        &:before{
            transform: translateY(-10px);
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background: var(--clr-theme-yellow);
            transition: all .5s ease-in-out;
        }
    `;

    return <BurgerIcon />
    
}


