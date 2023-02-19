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
      code: "https://github.com/Stinger1369/POrtfolio-react",
    },
    {
      id: 2,
      src: reactParallax,
      demo: <AppOmdb />,
      code: "https://github.com/Stinger1369/POrtfolio-react",
    },
    {
      id: 3,
      src: navbar,
      demo: <Responsive />,
      code: "https://github.com/Stinger1369/POrtfolio-react",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: <App />,
      code: "https://github.com/Stinger1369/POrtfolio-react",
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
      code: "https://www.agence-tmart.com/",
    },
    {
      id: 6,
      src: reactWeather,
      demo: <Task />,
      code: "https://github.com/Stinger1369/POrtfolio-react",
    },
  ];

  return (
    <section
      id="portfolio"
      className={` md:h-auto md:min-h-screen ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-center text-white py-6">
            Voici quelques-uns de mes projets les plus récents.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
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
                <button
                  className="w-1/2 py-3 text-sm font-medium text-gray-700 uppercase tracking-wider"
                  onClick={() => window.open(code)}
                >
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
