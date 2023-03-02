import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");

  const sendMessage = async (message) => {
    try {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, user: "user" },
      ]);
      const API_KEY =
        "Bearer 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";
      const { data } = await axios.post(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
        { inputs: { text: message } },
        { headers: { Authorization: API_KEY } }
      );
      const { generated_text } = data;
      setResponse(generated_text);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: generated_text, user: "bot" },
      ]);
    } catch (error) {
      console.log(error);
      // Ajoutez ici un code pour gérer l'erreur en fonction de l'erreur retournée
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    sendMessage(message);
    event.target.reset();
  };



  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={`message-${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
