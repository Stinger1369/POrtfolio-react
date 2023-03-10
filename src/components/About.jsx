import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      name="about"
      className={`w-full flex flex-col items-center justify-center pt-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            À propos de Bilou
          </p>
          <br />
          <p
            className={`text-xl mt-10 md:mt-20 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            En tant que développeur Full Stack expérimenté, j'ai une passion
            pour l'apprentissage et l'utilisation de technologies innovantes
            pour créer des applications web et mobiles de haute qualité. Mes
            compétences en développement incluent JavaScript, React, PHP,
            Symfony, Python, Django et Java. En plus de mes compétences en
            développement, j'ai également une solide expérience en tant que
            technicien réseau. Je suis capable de travailler de manière autonome
            et rigoureuse pour livrer des résultats de qualité supérieure. Mon
            objectif est de continuer à élargir mes compétences et à travailler
            sur des projets passionnants qui ont un impact réel sur les
            utilisateurs finaux
          </p>
          <br />
          <p className={`text-lg md:text-xl${darkMode ? "white" : "black"}`}>
            Je suis actuellement à la recherche d'un emploi ou un stage en tant que
            développeur web et web mobile. Si vous avez un poste à pourvoir,
            n'hésitez pas à me contacter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
