"use client"
import React from 'react';
import { useState } from 'react';
import { LogIn } from 'react-feather';
import SvgLogoComponent from './LogoSVGR'
import RoundButton from './RoundButton';
import BurgerStyledComponent from './BurgerStyledComponent';
import Burger from './Burger';
import DropdownNav from './DropdownNav'

export default function Header(props) {
    const [isHover, setIsHover] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const handleBurgerEnter = () => {
        setShouldShowDiv(true);
    }

    const handleBurgerLeave = () => {
        setShouldShowDiv(false);
    }

    const menuItems = ["Опция", "Eщё опциия", "Другая опция"]

   

    return (
        <header className = "main-header">
           <div className = "header-left-section">
                <div><SvgLogoComponent className="logo" /></div>       
                <div  onClick = {() => {setShowNavbar(!showNavbar)}}
                      style ={{padding: "2em"}}>
                        <Burger />
                </div>
                
                
            </div>
        <div style={{padding: "1em"}}>           
            <RoundButton icon= {<LogIn 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style = {{stroke: isHover ? "var(--clr-theme-yellow)" : "var(--clr-text)", height: "18px", marginRight: "3px", marginTop: "3px"}}
                />}/>
            </div>
            <DropdownNav show = {showNavbar}/>
        </header>
    )
}
