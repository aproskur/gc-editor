import { createChatBotMessage } from 'react-chatbot-kit';
import EditCardWidget from '../components/chatbot-components/EditCardWidget'
import ColorPickerWidget from '../components/chatbot-components/ColorPickerWidget'
import Colorful from '../components/chatbot-components/Colorful'

const config = {  initialMessages: [createChatBotMessage(`Привет, я Редактор.`)],
                  botName: 'CubicaBot',
                  customStyles: {

                  },
                  widgets: [
                    {
                        widgetName: 'editCard',
                        widgetFunc: (props) => <EditCardWidget {...props}/>
                    },
                    {
                      widgetName: 'colorPicker',
                      widgetFunc: (props) => <ColorPickerWidget {...props}/>
                    },
                    {
                      widgetName: 'colorful',
                      widgetFunc: (props) => <Colorful {...props} />
                    }


                  ],

};
export default config;