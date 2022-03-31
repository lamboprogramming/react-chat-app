import React from 'react';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="cde81a12-a3d2-4a80-ab43-ac39c9a5e5e2"
            userName="chatadmin"
            userSecret="password123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
    );
}
   
    
 export default App;