import React from "react"
import "./FormationsExperiences.css"
import DataFormations from "../componenetsCv/datas/Formations";
import DataExperiences from "../componenetsCv/datas/Experiences";
import Formations from "../componenetsCv/Formations";
import Experiences from "../componenetsCv/Experiences";


function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  )
}

export default FormationsExperiences
