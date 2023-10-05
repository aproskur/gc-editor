import React from 'react';
import {ActionProvider} from './ActionProvider'; // Import the ActionProvider

const ChatbotProvider = ({ children }) => {
  return (
    <ActionProvider>
      {children}
    </ActionProvider>
  );
};

export default ChatbotProvider;
