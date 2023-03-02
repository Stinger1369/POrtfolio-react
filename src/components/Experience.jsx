import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.png";
import angular from "../assets/angular.png";
import symphony from "../assets/symphony.png";
import js from "../assets/js.png";

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      href: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      href: "https://developer.mozilla.org/fr/docs/Web/CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      href: "https://reactjs.org/",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      href: "https://tailwindcss.com/",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      href: "https://nextjs.org/",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
      href: "https://graphql.org/",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      href: "https://github.com/",
    },
    {
      id: 9,
      src: php,
      title: "PHP",
      style: "shadow-gray-400",
      href: "https://www.w3schools.com/php/php_intro.asp",
    },
    {
      id: 10,
      src: angular,
      title: "angular",
      style: "shadow-pink-400",
      href: "https://angular.io/",
    },
    {
      id: 11,
      src: symphony,
      title: "Symfony",
      style: "shadow-gray-400",
      href: "https://symfony.com/",
    },
    {
      id: 12,
      src: js,
      title: "Java-Script",
      style: "shadow-gray-400",
      href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
  ];

  return (
    <div
      name="experience"
      className={` w-full bg-gradient-to-b from-${
        darkMode ? "black" : "gray-100"
      } to-${darkMode ? "gray-800" : "white"} text-${
        darkMode ? "white" : "black"
      } w-full min-h-screen`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiences
          </p>
          <p className="py-6">
            Voici les technologies avec lesquelles j'ai travaillé
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, href }) => (
            <a href={href} target="_blank" rel="noreferrer" key={id}>
              <div
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
