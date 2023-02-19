import User from "../componenetsCv/User";
import Skills from "../componenetsCv/Skills";
import Profil from "../componenetsCv/Profil";
import FormationsExperiences from "../componenetsCv/FormationsExperiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const containerWidths = {
  sm: "full",
  md: "4/5",
  lg: "3/5",
  xl: "2/5",
};

const CV = ({ data }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className={`w-full lg:w-1/5  mr-2 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
        }`}
      >
        
        <User />
        <Skills />
      </div>
      <div
        className={`w-full lg:w-4/5   ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
        }`}
      >
        <Profil />
        <FormationsExperiences />
      </div>
      <button className="fixed top-0 right-0 m-2" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </button>
    </div>
  );
};

export default CV;
