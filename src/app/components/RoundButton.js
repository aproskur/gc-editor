"use client"
import React from 'react'
import styled from 'styled-components'

export default function RoundButton({icon}) {

    const Round = styled.button`
        background-color: var(--clr-theme-grey);
        border-radius: 100%;
        border: none;
        width: 41px;
        height: 41px;
        text-align: center;
    `

    return (
        <Round>
            { icon }
        </Round>
    )
}
