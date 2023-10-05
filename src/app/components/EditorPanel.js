'use client'
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { useState, useEffect } from "react";
import config from "../chatbot/chatbotconfig";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";


export default function EditorPanel(props) {
    return (
        <div className = {props.className}>
            <Chatbot 
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText='Редактор'
            />
            {props.children}
        </div>
    )
}
