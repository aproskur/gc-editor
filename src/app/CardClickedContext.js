import React, { createContext, useContext, useState } from 'react';

const CardClickContext = createContext();

export const CardClickProvider = ({ children }) => {
  const [cardClicked, setCardClicked] = useState(false);

  const handleCardClick = (id) => {
    if(!cardClicked) {
      setCardClicked(true);
      console.log("clicked card with id", id);
      //send data to chatbot that the card is clicked 
      //sendDataToChatbot("button is clicked");
      setCssClass("card-active");
    } else {
      setCardClicked(false);
      console.log("unclicked");
      setCssClass("");
    }
  };

  return (
    <CardClickContext.Provider value={{ cardClicked, handleCardClick }}>
      {children}
    </CardClickContext.Provider>
  );
};
