import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import BilouImage from "../assets/BilouImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      name="home"
      className={`h-screen w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg pt-40 mx-auto flex flex-col  items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h6 className="text-4xl sm:text-5xl font-bold ">
            Je suis développeur Full Stack
          </h6>
          <p className="text-gray-500 py-4 max-w-md">
            En tant que développeur Full Stack, je suis passionné par
            l'apprentissage et l'utilisation de technologies innovantes pour
            créer des applications web et mobiles de haute qualité.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white inline-flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={BilouImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
