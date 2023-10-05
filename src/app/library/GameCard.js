'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { useSharedData } from 'src/app/SharedDataContext.js';



export default function GameCard(props) {


  const[clicked, setClicked] = useState(false);
  const[cssClass, setCssClass] = useState("");



  // Переменные стейтов, чтобы отслеживать изменения: изменение текста, изменение бэкграунда
  // - текст
  // - стили
  const [newText, setNewText] = useState(props.text);
  const [newBackgroundColor, setNewBackgroundColor] = useState(props.style.backgroundColor);
  const { color } = useSharedData();
  const { updateColor } = useSharedData()
  const { sharedData } = useSharedData(); // Доступ к контексту SharedDataContext
  const { passDataToChatbot } = useSharedData(); // Доступ к функции passDataToChatbot() в контексте SharedDataContext
  const editCardData = sharedData['EditCardWidget'];
  const { passRequestToChatbot } = useSharedData();
  const { componentClicked, setComponentClicked } = useSharedData();
  //const { clearChatbotRequest } = useSharedData();

console.log("If color visible in the card from context")
  console.log(color);
  useEffect(() => {
    if(clicked){
      setNewBackgroundColor(color);
    }
  }, [color, clicked]);

  //DEBUG. Проверяю полученные данные из контекста
  useEffect(() => {
    console.log('GameCard received data:', editCardData);
  }, [editCardData]);

  // Здесь слушаю, есть ли изменения в SharedData (находится в контексте). 
  // Проверяю key, чтобы понять, что именно надо апдейтить
  useEffect(() => {
    const editCardData = sharedData['EditCardWidget'];   
    if (editCardData) {
      if (editCardData.key === 'text') {
        // Update the text
        setNewText(editCardData.value);
      } else if (editCardData.key === 'background') {
        // Update the background color
        setNewBackgroundColor(editCardData.value);
      }
    }
  }, [sharedData]);


  //Обработка клика карточки. 
  const handleCardClick = (id) => {
    console.log('Clicked component with ID:', id);
    if(!clicked) {
      setClicked(true);
      setComponentClicked({clicked: true, id: id, component: "GameCard"}); //Зачем?
      console.log("clicked");
      //Добавление css класса при клике на карту (выделение карточки)
      setCssClass("card-active");
      updateColor(props.style.backgroundColor); //передаю цвет фона текущего компонета, чтобы заапдейтить стейт
      //иначе при вызове колорпикера сбросится фон
     
      //Отправить данные в контекст SharedDataContext (карта кликнута, id карты)
      const data = {id: id, value: 'triggerCardWidget' };
      passRequestToChatbot('GameCard', data);
      //clearChatbotRequest();

    } else {
      setClicked(false);
      setComponentClicked({clicked: false, id: null, component: null});
      console.log("unclicked");
      setCssClass("");
    }

    // callbackFunc - passes card id
    
  }





/*
  const handleCardClick = (id) => {
    console.log('Clicked component with ID:', id);
    if(!clicked) {
      setClicked(true);
      console.log("clicked");
      //Добавление css класса при клике на карту (выделение карточки)
      setCssClass("card-active");
     
      //Отправить данные в контекст SharedDataContext (карта кликнута, id карты)
      passDataToChatbot(true, id);

    } else {
      setClicked(false);
      console.log("unclicked");
      setCssClass("");
    }

    // callbackFunc - passes card id
    
  }

*/

  return (
      <div style={{ ...props.style, backgroundColor: newBackgroundColor }} className={cssClass} onClick={()=>handleCardClick(props.id)} id={props.id}>{newText}</div>
  )
}
