import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../components/ThemeProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import CV from "./CV";

const NavBar = () => {
  const [data] = useState({});
  const [nav, setNav] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link: "cv",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full text-gray-500 h-20 px-4 bg-black  fixed ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <a href="home" className="cursor-pointer">
          <p className="text-5xl font-signature ml-2 mt-6 text-white">Bilou</p>
        </a>
      </div>
      <ul className="hidden md:flex mt-3 ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-gray-500${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {link === "cv" ? (
              <button
                className={`cursor-pointer ${
                  darkMode ? "text-white" : "text-black"
                }`}
                onClick={() => setModalIsOpen(true)}
              >
                {link}
              </button>
            ) : (
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            )}
          </li>
        ))}
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 text-gray-500 md:hidden ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex flex-col justify-center items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-5 cursor-pointer capitalize py-6 text-4xl font-medium hover:scale-105 duration-200 text-gray-500"
            >
              {link === "cv" ? (
                <button onClick={() => setModalIsOpen(true)}>{link}</button>
              ) : (
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <CV data={data} />
        <button
          className="fixed top-0 right-0 m-10 pr-5 "
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>
      </Modal>
    </div>
  );
};

export default NavBar;
