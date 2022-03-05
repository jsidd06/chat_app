import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="
d20ec61c-671e-4cf4-b27b-f7497a4d2f9e"
        userName="jsidd"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio("https://raw.githubusercontent.com/jsidd/react-chat-engine/master/example/assets/new-message.mp3").play()}
      />
    </div>
  );
}

export default App;
