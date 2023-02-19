import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      id="contact"
      className={`w-full flex flex-col items-center justify-center pt-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 pb-8">
          Contact
        </h2>

        <form
          className="max-w-md w-full mx-auto mt-10 space-y-6 text-lg"
          action="https://formspree.io/f/xdopbgad"
          method="POST"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="font-medium">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={`w-full border rounded-md p-2 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`w-full border rounded-md p-2 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`w-full border rounded-md p-2 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-2 font-medium ${
              darkMode ? "bg-gray-800" : ""
            }`}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
