import React from 'react';
import { useSharedData } from 'src/app/SharedDataContext.js';
import { useEffect } from 'react';
import { useState } from 'react'
import { createContext, useContext } from 'react';


const MessageParser = ({ children, actions }) => {


  //const [state, setTestState] = useState();

  const { sharedData } = useSharedData(); // Доступ к контексту
  const { triggerChatbot }  = useSharedData();
  const { requestChatbot } = useSharedData(); 
  const editCardData = sharedData['EditCardWidget'];

  const [hasColorActionFired, setHasColorActionFired] = useState(false);
  const [isChatbotTriggered, setChatbotTriggered] = useState(false)
  const [isChatbotRequested, setChabotRequested] = useState(false);
  const [isColorpickerRequested, setColorpickerRequested] = useState(false);

  const requestFromGameCard = requestChatbot['GameCard'];




  useEffect(() => {
    if (
      !hasColorActionFired &&
      editCardData &&
      editCardData.key === 'colorpicker'
    ) {
      actions.handleColor();
      setHasColorActionFired(true);
    }
  }, [editCardData, actions, hasColorActionFired]);


  
  useEffect(() => {
    if 
     (triggerChatbot && !isChatbotTriggered) {
      actions.handleCard();
      setChatbotTriggered(true);
     }
  }, [triggerChatbot, actions, isChatbotTriggered]);
  


  useEffect(() => {
    console.log("USEEFFECT");
    console.log(isChatbotRequested)

    if (
      requestChatbot &&
      !isColorpickerRequested &&
      requestChatbot['EditCardWidget'] &&
      requestChatbot['EditCardWidget'].key === 'colorpicker' &&
      requestChatbot['EditCardWidget'].value === 'show'
    ) {
      actions.handleColorful();
      setColorpickerRequested(true); 
    }
  }, [requestChatbot, isChatbotRequested, actions]);



  //Если произошли изменения стейта requestChatbot(он находится в SahredCOntext), то в зависимости от того, 
  //какой модуль послал запрос и что именно ему надо
  //вызывается  реакция чатбота (реакции описаны в ActionProvider.js)
 useEffect(() => {
  if(requestFromGameCard && !isChatbotRequested){
    console.log("IS requestChatbot.value visible?", requestFromGameCard.value)
    if(requestFromGameCard.value === 'triggerCardWidget'){
      setChabotRequested(true);
      actions.handleCard(requestFromGameCard);
    }
  }
 }, [requestFromGameCard, actions, isChatbotRequested]);
  
  const parse = (message) => {
    const lowercase = message.toLowerCase()
    if(lowercase.includes('hello')){
      actions.handleHello();
    }
    if(lowercase.includes('card')){
      actions.handleCardClick();
    }


    //для дебага, проверить как добавился color picker из react-color
    if(lowercase.includes('color')){
      actions.handleColor();
    }

    if(lowercase.includes('colorful')){
      actions.handleColorful();
    }
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
