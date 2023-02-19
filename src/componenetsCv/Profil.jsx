import React, { useState } from "react";

function Profil() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-5 mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2
        className={`text-2xl font-bold mb-2 tracking-wide ${
          isHovered ? "text-red-500 animate-pulse" : "text-gray-500"
        }`}
      >
        Profil
      </h2>
      <p
        className={`leading-7 ${
          isHovered ? "text-gray-200 animate-bounce" : "text-gray-300"
        }`}
      >
        Actuellement en formation de développeur web et mobile full stack,
        j'apprends à maîtriser les technologies les plus récentes, notamment
        ReactJS, Java et les différents frameworks. Mon expérience en
        maintenance informatique et réseau, combinée à ma curiosité et ma
        rigueur, me permet de comprendre les besoins des utilisateurs et de
        créer des applications simples et efficaces. Je suis capable de
        travailler en équipe, doté d'un solide sens du service, je suis en
        constante progression grâce à ma formation continue et je suis motivé
        par le besoin de relever de nouveaux défis professionnels.
      </p>
    </div>
  );
}

export default Profil;
