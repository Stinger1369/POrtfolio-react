import React, { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import BilouImage from "../assets/BilouImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.5s",
  };

  return (
    <div
      id="home"
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      aria-label="Section d'accueil"
    >
      <div
        className="max-w-screen-lg pt-40 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        role="main"
      >
        <div className="flex flex-col justify-center h-full">
          <h1
            className="text-4xl sm:text-5xl font-bold"
            aria-label="Développeur Full Stack"
          >
            Je suis développeur Full Stack
          </h1>
          <p
            className="text-gray-500 py-4 max-w-md"
            aria-label="Description de développeur"
          >
            En tant que développeur Full Stack, je suis passionné par
            l'apprentissage et l'utilisation de technologies innovantes pour
            créer des applications web et mobiles de haute qualité.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="animate-pulse group text-white inline-flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              aria-label="Lien vers la section Portfolio"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            id="BilouImage"
            src={BilouImage}
            alt="Photo de profil"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            style={imageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
