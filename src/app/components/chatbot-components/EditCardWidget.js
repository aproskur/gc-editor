import React from 'react';
import { useSharedData } from 'src/app/SharedDataContext.js'; //контекст 


function EditCardWidget(props) {


  console.log("EditCardWidget props", props);

  const { updateSharedData } = useSharedData();
  const { passRequestToChatbot } = useSharedData();  //для отправки запросов боту, например показать колор пикер
                                                      //попробовать передать стейт через пропс, которые передаются в бота вместе с конфигом
  
  
  const { handleBotWidgetClick } = useSharedData();
  const getColorFromColorPicker = (cardId) => {
    //показать колор пикер. Как? запрос к боту 
    const data = {value: 'colorpicker'}
    passRequestToChatbot('EditCardWidget', data);
    //получить дату от колор пикера
  }

  //Отправление данных в Shared Context (перезаписать старые данные?)
  const handleButtonClickChangeBackground = () => {
    const newData = { key: 'background', value: 'pink'};
    updateSharedData('EditCardWidget', newData);
  };

    //Отправление данных в Shared Context (перезаписать старые данные?)
    const handleButtonClickChangeBackgroundAndShowColorpicker = () => {

      //get Id of clicked Card

      //before updating data I need to show colorpicker (that is registered widget)
      //I need to get value from color picker

    //  const selectedColor = getColorFromColorPicker()
      
      //const newData = {  };
      //const newData = {key: 'background', value: selectedColor };
      //updateSharedData('EditCardWidget', newData);

      //const data = {value: 'colorpicker'}
      //passRequestToChatbot('EditCardWidget', data);


      const newData = {key: 'colorpicker' };
      updateSharedData('EditCardWidget', newData);
    };

//Просто обертка для HandleBotWidgetClick
    const buttonClicked = (data) => {
      handleBotWidgetClick(data);
    }
  
  const handleButtonClickChangeTextHardcoded = () => {
    const newData = { key: 'text', value: 'Это новый текст для карточки' };
    updateSharedData('EditCardWidget', newData);
  };

  const handleButtonClickChangeText = () => {
    //TODO функция, которая вернет текст

    
    //можно чтобы чатбот различал команды /text

    const newData = { key: 'text', value: 'Это новый текст для карточки' };
    updateSharedData('EditCardWidget', newData);
  };

  const testButtonData = {
    key: "widgetButton",
    request: "updateComponent",
    text: "test button passed a text",
    module: "EditCardWidget",
    newData: {key: 'background', value: 'lime'},
  }


  //TODO I can get an array of clicked components and pass it into the object,
  //in order to know which components background should be changed
  const testColorPickerCalling = {
    request: "Bot",
    module: "EditCardWidget",
    newData: {key: 'colorpicker', value: 'show'}
  }

  return (
    <div className="bot-container">
      <button className="bot-button" onClick={handleButtonClickChangeTextHardcoded}>
        захардкоженный текст
      </button>
      <button className="bot-button" onClick={handleButtonClickChangeText}>
        текст
      </button>
      <button className="bot-button" onClick={handleButtonClickChangeBackground}>
       хочу розовый фон
      </button>
      <button className="bot-button" onClick={() => buttonClicked(testColorPickerCalling)}>
        фон
      </button>
      <button className="bot-button" onClick={() => buttonClicked(testButtonData)}>
        test
      </button>

    </div>
  );
}

export default EditCardWidget;

