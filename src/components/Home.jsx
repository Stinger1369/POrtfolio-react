import React, { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import BilouImage from "../assets/BilouImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const IMAGE_SCALE_FACTOR = 1.1;
  const IMAGE_SCALE_TRANSITION_DURATION = "transform 0.5s";
  const SECTION_LABEL = "Section d'accueil";
  const DEVELOPER_TITLE = "Je suis développeur Full Stack";
  const DEVELOPER_DESCRIPTION =
    "En tant que développeur Full Stack, je suis passionné par l'apprentissage et l'utilisation de technologies innovantes pour créer des applications web et mobiles de haute qualité. Mon expertise s'étend de la création de sites web statiques à la conception d'applications mobiles dynamiques, en passant par le développement de logiciels complexes. Mon approche centrée sur l'utilisateur me permet de comprendre les besoins de mes clients et de leurs utilisateurs finaux, afin de créer des solutions performantes et intuitives. J'aime travailler en équipe et je suis toujours à la recherche de nouvelles idées et de nouvelles technologies pour améliorer mes compétences et offrir une valeur ajoutée à mes projets. Je suis convaincu que mon expérience et ma passion pour la technologie me permettent de relever les défis les plus complexes et de créer des applications web et mobiles qui répondent aux besoins de mes clients.";
  const PORTFOLIO_LINK_LABEL = "Lien vers la section Portfolio";

  const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };

  const imageStyle = {
    transform: isImageHovered ? `scale(${IMAGE_SCALE_FACTOR})` : "scale(1)",
    transition: IMAGE_SCALE_TRANSITION_DURATION,
  };

  return (
    <div
      id="home"
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      aria-label={SECTION_LABEL}
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
            {DEVELOPER_TITLE}
          </h1>
          <p
            className="text-gray-500 py-4 max-w-md"
            aria-label="Description de développeur"
          >
            {DEVELOPER_DESCRIPTION}
          </p>{" "}
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="animate-pulse group text-white inline-flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              aria-label={PORTFOLIO_LINK_LABEL}
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
            alt=""
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