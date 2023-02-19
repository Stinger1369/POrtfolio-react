import React, { useState } from "react";

const Skills = () => {
  const [data] = useState({
    skills: [
      { name: "JavaScript", percentage: "75%" },
      { name: "CSS", percentage: "85%" },
      { name: "HTML", percentage: "85%" },
      { name: "React", percentage: "60%" },
      { name: "PHP", percentage: "80%" },
      { name: "Django", percentage: "40%" },
      { name: "WordPress", percentage: "85%" },
      { name: "Symfony", percentage: "85%" },
      { name: "Angular", percentage: "70%" },
      { name: "Python", percentage: "40%" },
    ],
    languages: [
      { name: "Français", percentage: "100%" },
      { name: "Arabe", percentage: "100%" },
      { name: "Anglais", percentage: "80%" },
    ],
    hobbies: ["Rugby", "Jeux d'échecs", "Cuisine"],
  });

  return (
    <div className="skills ">
      <h3 className="text-lg font-medium mt-5 ml-2">Skills</h3>
      <ul className="list-none">
        {data.skills.map((skill) => (
          <li className="grid grid-cols-3 w-full">
            <div className="col-start-1 col-end-2">
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
            <div className="col-start-2 col-end-3">
              <progress
                className={`progress-bar ${
                  parseFloat(skill.percentage) < 50 ? "bg-red-500" : ""
                }`}
                value={parseFloat(skill.percentage)}
                max="100"
                style={{ width: "120px" }}
              >
                {skill.percentage}
              </progress>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium mt-5 ml-2">Langue</h3>
      <ul className="list-none">
        {data.languages.map((language) => (
          <li className="grid grid-cols-3">
            <p className="text-sm font-medium mr-3">{language.name}</p>
            <div className="col-start-2 col-end-3">
              <progress
                className={` progress-bar ${
                  parseFloat(language.percentage) < 50 ? "bg-red-500" : ""
                }`}
                value={parseFloat(language.percentage)}
                max="100"
                style={{ width: "120px" }}
              >
                {language.percentage}
              </progress>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium m-2 mt-5 text-center">Hobbies</h3>
      <ul className="list-none text-center">
        {data.hobbies.map((hobby) => (
          <li className="flex items-center justify-center mt-2">
            <p className="text-sm font-medium">{hobby}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
