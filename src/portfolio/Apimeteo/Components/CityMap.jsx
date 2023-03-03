import React from "react";

function CityMap({ data }) {
  return (
    <iframe
      title="Carte de la ville"
      className="w-full h-96 md:h-full"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        data.coord?.lon - 0.1 || 0
      },${data.coord?.lat - 0.1 || 0},${data.coord?.lon + 0.1 || 0},${
        data.coord?.lat + 0.1 || 0
      }&layer=mapnik`}
    ></iframe>
  );
}

export default CityMap;
