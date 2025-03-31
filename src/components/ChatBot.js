import React, { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./ChatBot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I will get back to you soon!", sender: "bot" }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-icon" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaComments />}
      </div>
      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">Miles HR Chatbot</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
            <button onClick={handleSend}><FaPaperPlane /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
