import React, { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name is required");
    } else if (name.length < 2) {
      setNameError("Name must be at least 2 characters");
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required");
    } else if (message.length < 20) {
      setMessageError("Message must be at least 20 characters");
    } else {
      setMessageError("");
    }

    if (!nameError && !emailError && !messageError) {
      alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }
  };

  return (
    <div
      name="contact"
      id="contact"
      className={` bg-gradient-to-b from-${darkMode ? "black" : "white"} to-${
        darkMode ? "gray-800" : "gray-100"
      } p-4 text-${darkMode ? "white" : "black"}`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Entrer votre nom "
              className={`p-2 bg-transparent border-2 rounded-md text-${
                darkMode ? "white" : "black"
              } focus:outline-none`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            <input
              type="text"
              name="email"
              placeholder="Votre email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-${
                darkMode ? "white" : "black"
              } focus:outline-none`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            <textarea
              name="message"
              placeholder="Entrer votre message"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-${
                darkMode ? "white" : "black"
              } focus:outline-none h-32`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && (
              <p className="text-red-500 text-xs">{messageError}</p>
            )}
            <button
              className={` my-4 p-2 rounded-md bg-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "black" : "white"} focus:outline-none`}
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center mt-20 py-4 text-white-500 text-sm">
        &copy; 2020 - {new Date().getFullYear()} www.zara-bil.fr
      </footer>
    </div>
  );
};

export default Contact;

