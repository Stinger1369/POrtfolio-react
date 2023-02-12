import "./StyleCv.css";
import User from "../componenetsCv/User";
import Skills from "../componenetsCv/Skills";
import Profil from "../componenetsCv/Profil";
import FormationsExperiences from "../componenetsCv/FormationsExperiences";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../components/ThemeProvider";

const CV = ({ data }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex" >
        <div
          className={`w-1/5  mr-2 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
          }`}
        >
          <User />
          <Skills />
        </div>
        <div
          className={`w-4/5  ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
          }`}
        >
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
      <button className="fixed top-0 right-0 m-2" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </button>
    </div>
  );
};

export default CV;
