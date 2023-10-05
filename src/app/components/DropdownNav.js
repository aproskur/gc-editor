"use client"
import React, { useState } from 'react'
import styled from 'styled-components'


export default function DropdownNav({children, show}) {
    const DropdownNavbar = styled.nav`
    width: 300px;
    height: 400px;
    border-radius: 8px;
    border: 1px solid var(--clr-theme-yellow-02);
    background-color: var(--bgr-clr-dark);
    position: absolute;
    top: 100px;
    left: 5px;
    `


  return (
    show ? <DropdownNavbar>{children}</DropdownNavbar> : null
  )
}
