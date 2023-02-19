import React from "react";
import { jsPDF } from "jspdf";
 import CV from "../components/CV";

function DownloadCV() {
  const downloadCV = () => {
    const doc = new jsPDF();
    doc.text("CV", 20, 20);
    doc.addHTML(document.getElementById("cv"), () => {
      doc.save("cv.pdf");
    });
  };

  return (
    <div>
      <button onClick={downloadCV}>Télécharger CV en PDF</button>
      <div id="cv">
        <CV />
      </div>
    </div>
  );
}

export default DownloadCV;
