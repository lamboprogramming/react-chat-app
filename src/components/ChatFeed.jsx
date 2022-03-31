import MessageForm from "./MessageForm";
import MyMesage from "./MyMesage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chat[activeChat];

    console.log(chat, userName, messages);

    return (
        <div>
            ChatFeed
        </div>
    );
}

export default ChatFeed;