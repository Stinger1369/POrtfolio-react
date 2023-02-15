import React, { useState, useEffect } from "react";

function Localisation() {
  const [userLocation, setUserLocation] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <iframe
        title="Carte du monde"
        className="w-full h-96 md:h-full"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${
          userLocation.lon - 0.1
        },${userLocation.lat - 0.1},${userLocation.lon + 0.1},${
          userLocation.lat + 0.1
        }&layer=mapnik`}
      ></iframe>
    </div>
  );
}

export default Localisation;
