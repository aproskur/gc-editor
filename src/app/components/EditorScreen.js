'use client'
import React from 'react'
import { useState } from 'react'
import { createElement } from 'react';
import GameCard from '../library/GameCard';
import GameScreen from '../library/GameScreen';




const firstScreenToEdit = undefined;
const test = {
  "component": "gamescreen",
  "id": "1",
  "css": {
    "display": "grid",
    "gridTemplateColumns": "20% 70% 10%",
    "gridTemplateRows": "20% auto",
    "background": "url('./images/arctic-background.png') no-repeat",
    "backgroundSize": "cover",
    "height": "100vh",
    "width": "100%",
    "backgroundSize": "cover"
  },
  "children": [
    {
      "component": "card",
      "id": "2",
      "text": "Антарктика - это огромный мир из воды, льда и снега, настолько огромный, что никто из его обитателей, кроме, пожалуй, китов, не представляет его размеров. Кроме гигантского материка,",
      "css": {
        "width": "300px",
        "height": "300px",
        "gridColumn": "2",
        "gridRow": "2",
        "padding": "1.25em 1em",
        "backgroundColor": "rgba(162, 217, 247, 0.5)",
        "color": "#fff",
        "fontWeight": "bold",
        "fontSize": "1rem",
        "overflow": "scroll",
      }           
    },
  ]
}


const testcardText = "Антарктика - это огромный мир из воды, льда и снега, настолько огромный, что никто из его обитателей, кроме, пожалуй, китов, не представляет его размеров. Кроме гигантского материка,";
const testcardCss =  {
  "width": "300px",
  "height": "300px",
  "gridColumn": "2",
  "gridRow": "2",
  "padding": "1.25em 1em",
  "backgroundColor": "rgba(162, 217, 247, 0.5)",
  "color": "#fff",
  "fontWeight": "bold",
  "fontSize": "1rem",
  "overflow": "scroll",
}   

export default function EditorScreen(props) {


  const [screenToEdit, setScreenToEdit] = useState(firstScreenToEdit);

  
  
  const renderComponent = (c) => {
    const child_comps_arr = c.children || [];
    const ch = child_comps_arr.map(x => renderComponent(x));
    if (c.component === "gamescreen") {
      const styles = c.css
      const r = createElement(GameScreen, { style: styles }, ch)
      console.log("GS RET")
      console.log(r)
      return r
    }
    if (c.component === "card") {
      const styles = c.css
      return createElement(GameCard, { style: styles, text: c.text, id: c.id}, ch)
    } else {
      console.log("eRROR")
      console.log(c.component)
      const styles = c.css
      const htmlTag = c.component
      return createElement(htmlTag, { style: styles }, [ch, c.text])
    }
  }


  return (
    
    <div className={props.className}>     
           <div className = "container" >
              {renderComponent(test)}
           </div>     
    </div>
  )
}
