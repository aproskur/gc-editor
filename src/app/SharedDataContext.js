//Контекст, в котором будут храниться данные,полученные от разных модулей чатбота.
// К этому контексту будет доступ у разных компонетов (и модулей)
//В каждом модуле, который передаёт данные в этот контекст будет какая-то функция (напр. updateSharedData)
// Там будет передаваться дата и (название модуля?)

import React, { createContext, useContext, useState, useEffect } from 'react';

const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({});
  const [triggerChatbot, setTriggerChatbot] = useState(false);
  const [requestChatbot, setRequestChatbot] = useState({});
 //triggerChatbot(пока что такое название) нужен для того, чтобы из компонентов вызывать виджеты и реакции чатбота


 const [componentClicked, setComponentClicked] = useState({clicked: false, id : null, type : null});
 console.log(`COMPNENT CLICKED ${componentClicked.component} with id ${componentClicked.id}`)

  const [color, setColor] = useState('#fff'); // Add a state variable for color
  console.log("GLOBAL COLOR")
  console.log(color)

    // Function to update the color in the shared context
    const updateColor = (newColor) => {
      setColor(newColor);
    };


  //updateSharedData это любые изменения свойств какого-то компонента - поменять фон, текст итд - всё через Shared Data
  const updateSharedData = (module, newData) => {
    setSharedData((prevData) => ({
      ...prevData,
      [module]: newData,
    }));
  };



  const handleBotWidgetClick = (data) => {
    if(data.request === 'updateComponent'){
      console.log(data);
        console.log(`TEST handle click from ${data.key}`);
        console.log(`Passed to UpdateSharedData: module: ${data.module} newData: ${data.NewData}`)
        updateSharedData(data.module, data.newData);
    } 
    if(data.request === 'Bot'){
      console.log("Bot Needed")
      passRequestToChatbot(data.module, data.newData)  //(cardWidget, {object})

    }
  }


  //Эта функция должна вызываться компонентами, когда им нужен ответ чатбота. Например, кликнули на карточку, 
  //в чатботе появился виджет с вариантами того, что можно сделать с этой карточкой 
  // Функция меняет стейт глобальной переменной requestChatbot. Он сеттит это стейт: пока что в этом стейте
  // будет объект, в котором есть ключ (название компонента) и объект с какими-то данными
  //Функция и переменная стейта доступны через SharedContext
  const passRequestToChatbot = (component, componentData) => {
    console.log("PASS REQUEST TO CHATBOT");
    console.log(componentData);
      setRequestChatbot(() => ({
        [component]: componentData,
      }));
      console.log(requestChatbot)
  }
  
  //{EditCardWidget : {key: colorpicker, value: show}}


  const passDataToChatbot = (module, id) => {
    setTriggerChatbot(true);
  };

     //Проверяю заапдейтилась ли дата (надо только для дебага)
     useEffect(() => {
      console.log('ChatBottriggered', triggerChatbot);
    }, [triggerChatbot]);


    //Проверяю заапдейтилась ли дата (надо только для дебага)
    useEffect(() => {
        console.log('Shared Data Updated:', sharedData);
      }, [sharedData]);



    //Проверяю заапдейтилась ли дата (надо только для дебага)
    useEffect(() => {
      console.log('Shared NEW NEW:', requestChatbot);
    }, [requestChatbot]);

      

  return (
    <SharedDataContext.Provider value={{ sharedData, 
                                          updateSharedData, 
                                          passDataToChatbot, 
                                          triggerChatbot, 
                                          passRequestToChatbot, 
                                          requestChatbot, 
                                          handleBotWidgetClick, 
                                          color,
                                          updateColor,
                                          componentClicked,
                                          setComponentClicked,
                                          }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  return useContext(SharedDataContext);
};