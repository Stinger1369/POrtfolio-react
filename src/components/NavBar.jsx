import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../components/ThemeProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";

import Modal from "react-modal";
import CV from "./CV";
import { keyframes } from "styled-components";
import styled from "styled-components";

const NavBar = () => {
  const [data] = useState({});
  const [nav, setNav] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
    },
    {
      id: 2,
      link: "about",
      label: "About",
    },
    {
      id: 3,
      link: "portfolio",
      label: "Portfolio",
    },
    {
      id: 4,
      link: "experience",
      label: "Experiences",
    },
    {
      id: 5,
      link: "contact",
      label: "Contact",
    },
    {
      id: 6,
      link: "CV",
      label: "CV",
    },
  ];
  const explodeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

  const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 50px;
    width: 100px;
    margin-left: 15px;

    & div {
      position: absolute;
      height: 50%;
      width: 50%;
      transition: transform 0.5s ease-in-out;
      opacity: 1;
    }

    & div:first-child {
      background-color: #6c63ff;
      left: 0;
      top: 0;
      transform: translateX(0%) translateY(0%);
    }

    & div:nth-child(2) {
      background-color: #ffa400;
      right: 0;
      top: 0;
      transform: translateX(0%) translateY(0%);
    }

    & div:nth-child(3) {
      background-color: #00bfb2;
      left: 0;
      bottom: 0;
      transform: translateX(0%) translateY(0%);
    }

    & div:last-child {
      background-color: #e84545;
      right: 0;
      bottom: 0;
      transform: translateX(0%) translateY(0%);
    }

    & div.rectangle-1 {
      background-color: #6c63ff;
      left: 0;
      top: 0;
    }

    & div.rectangle-2 {
      background-color: #ffa400;
      right: 0;
      top: 0;
    }

    & div.rectangle-3 {
      background-color: #00bfb2;
      left: 0;
      bottom: 0;
    }

    & div.rectangle-4 {
      background-color: #e84545;
      right: 0;
      bottom: 0;
    }

    &:hover div:first-child {
      animation: ${explodeAnimation} 0.5s linear forwards;
    }

    &:hover div:nth-child(2) {
      animation: ${explodeAnimation} 0.5s 0.1s linear forwards;
    }

    &:hover div:nth-child(3) {
      animation: ${explodeAnimation} 0.5s 0.2s linear forwards;
    }

    &:hover div:last-child {
      animation: ${explodeAnimation} 0.5s 0.3s linear forwards;
    }

    &:hover div {
      cursor: pointer;
    }

    &:hover div:before {
      display: none;
    }

    &:hover div:after {
      display: none;
    }

    & div:before {
      content: "";
      position: absolute;
      height: 10px;
      width: 50%;
      background-color: #f1f1f1;
      top: -10px;
      left: 0;
    }

    & div:after {
      content: "";
      position: absolute;
      height: 10px;
      width: 50%;
      background-color: #f1f1f1;
      bottom: -10px;
      right: 0;
    }
  `;
  return (
    <nav
      className={`flex justify-between items-center w-full h-20 px-4 bg-black  fixed ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <a
          href="/"
          className="cursor-pointer no-underline text-inherit hover:text-red-500"
        >
          <Logo>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <p
              className={`text-5xl font-signature ml-2 mt-6 text-white${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Bil
            </p>
          </Logo>
        </a>
      </div>

      <div className="md:hidden">
        <button
          className={`cursor-pointer z-10 text-gray-500 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      <ul className="hidden md:flex mt-3">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-gray-500${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {link === "CV" ? (
              <button
                className={`cursor-pointer ${
                  darkMode ? "text-red-800 font-bold text-xl" : "text-black"
                }`}
                onClick={() => setModalIsOpen(true)}
              >
                {label}
              </button>
            ) : (
              <Link to={link} smooth duration={500}>
                {label}
              </Link>
            )}
          </li>
        ))}

        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </ul>

      {nav && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex flex-col justify-center items-center">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-5 cursor-pointer capitalize py-6 text-4xl font-medium hover:scale-105 duration-200 text-gray-500"
            >
              {link === "CV" ? (
                <button onClick={() => setModalIsOpen(true)}>{label}</button>
              ) : (
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {label}
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
    </nav>
  );
};

export default NavBar;