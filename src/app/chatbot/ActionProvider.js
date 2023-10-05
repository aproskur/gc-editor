import React from 'react';
import { createContext, useContext } from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

 const test = () => {
    console.log("Hello from actions provider");
    const botMessage = createChatBotMessage("Здрасте вам")
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCard = (data) => {
    const botMessage = createChatBotMessage(`Выбрана карточка id ${data.id}. Что редактировать?`, { widget: 'editCard' });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleCardClick = (cardId) => {
    // Handle the card click event, for example, by displaying EditCardWidget.
    const botMessage = createChatBotMessage("Для редактирования выбрана карта", {
      widget: "editCard",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleColor = () => {
    const botMessage = createChatBotMessage("Цвет", { widget: 'colorPicker' });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleColorful = () => {
    const botMessage = createChatBotMessage("Пикер Colorful", { widget: 'colorful' });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }



  return (
    <div>

        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello,
              handleCard,
              handleColor,
              handleCardClick,
              handleColorful,
              test,
            },
          });
        })}

    </div>
  );
};


export default ActionProvider;

