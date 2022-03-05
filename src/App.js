import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import LoginForm from "./components/LoginForm/LoginForm";

const projectID = "d20ec61c-671e-4cf4-b27b-f7497a4d2f9e"
function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "'https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
