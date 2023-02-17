import React, { useState, useContext } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import ApiMetJs from "../portfolio/Apimeteo/ApiMetJs";
import Responsive from "../portfolio/Responsive/Responsive";
import Task from "../portfolio/task/Task";
import Modal from "react-modal";
import { ThemeContext } from "../components/ThemeProvider";
import AppOmdb from "../portfolio/OMDBcinema/AppOmdb";
import App from "../portfolio/Ecommerce/App";

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
      demo: <AppOmdb />,
    },
    {
      id: 3,
      src: navbar,
      demo: <Responsive />,
    },
    {
      id: 4,
      src: reactSmooth,
      demo: <App />,
    },
    {
      id: 5,
      src: installNode,
      demo: (
        <iframe
          title="Site Wordpress"
          src="https://www.agence-tmart.com/"
          style={{ width: "100%", height: "80vh", border: "none" }}
        ></iframe>
      ),
    },
    {
      id: 6,
      src: reactWeather,
      demo: <Task />,
    },
  ];

  return (
    <section
      id="portfolio"
      className={`h-screen w-full  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-center text-4xl text-white font-bold ">
          Portfolio
        </h2>
        <p className="text-center text-white py-6">
          Voici quelques-uns de mes projets les plus récents.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, src, demo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-md object-cover h-48 sm:h-56 w-full transition-transform duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center bg-gray-100">
                <button
                  className="w-1/2 py-3 text-sm font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300"
                  onClick={() => handleModal(demo)}
                >
                  Demo
                </button>
                <button className="w-1/2 py-3 text-sm font-medium text-gray-700 uppercase tracking-wider">
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
