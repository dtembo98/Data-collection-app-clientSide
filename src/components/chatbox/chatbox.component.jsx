import React from "react";
import "./chatbot.style.css";
import LeftMessageBox from "../left-message/left-message.component.jsx";
import RightMessageBox from "../right-message/right-message.component.jsx";
import InputBox from "../Translate-Form-Box/input-box.component.jsx";
const ChatBox = () => (
  <div className="msger">
    <header className="msger-header">
      <div className="msger-header-title">
        <i className="fas fa-comment-alt" /> Simple Translation app
      </div>
      <div className="msger-header-options">
        <span>
          <i className="fas fa-cog" />
        </span>
      </div>
    </header>
    <div className="msger-chat">
      <LeftMessageBox />
      <RightMessageBox />
      <InputBox />
    </div>
  </div>
);
export default ChatBox;
