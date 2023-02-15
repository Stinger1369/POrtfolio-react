import React, { useState, useContext } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import ApiMetJs from "../portfolio/Apimeteo/ApiMetJs";
import Responsive from "../portfolio/Responsive/Responsive";
import Modal from "react-modal";
import { ThemeContext } from "../components/ThemeProvider";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  Modal.setAppElement("#root");

  const handleModal = (demo) => {
    setCurrentDemo(demo);
    setShowModal(!showModal);
  };

  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: <ApiMetJs />,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
      demo: <Responsive />,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <section
      id="portfolio"
      className={`h-screen w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-center text-4xl text-white font-bold pb-8">
          Portfolio
        </h2>
        <p className="text-center text-white py-6">
          Voici quelques-uns de mes projets les plus récents et les plus
          importants.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleModal(demo)}
                >
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={showModal} onRequestClose={() => handleModal(null)}>
        {currentDemo}
      </Modal>
    </section>
  );
};

export default Portfolio;