import React, { useState, useEffect } from "react";
import axios from "axios";
import "./api.css";


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [cityImage, setCityImage] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
  const cityImageUrl = `https://api.unsplash.com/search/photos?query=${location}&client_id=9WWM5FaAgR5NV2l-GsdjL5A1FK0hRUYkIgWJM7CIzXE`;

  useEffect(() => {
    if (location) {
      axios
        .get(cityImageUrl)
        .then((response) => {
          setCityImage(response.data.results[0].urls.regular);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const convertWindSpeed = (speed) => {
    // Conversion de miles par heure (MPH) en kilomètres par heure (km/h)
    return Math.round(speed * 1.60934);
  };

return (
  <div className="">
    <div className="flex flex-col h-screen md:flex-row ">
      <div
        className="w-full md:w-2/6 mr-4"
        style={{ backgroundImage: `url(${cityImage})` }}
      >
        <div className="search p-2">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Entrer le nom de la ville"
            className="py-2 px-4 rounded-lg border border-gray-800 text-red-500 text-lg  w-full"
            type="text"
          />
        </div>
        <div className=" pt-4">
          <div className="location justify-center items-center text-2xl font-bold ">
            <p className="inline-block bg-green-200 m-2 rounded-xl p-2">
              {data.name}
            </p>
          </div>
          <div className="inline-block temp  m-2 ">
            {data.main ? (
              <h1 className="bg-green-200 rounded ">
                {data.main.temp.toFixed()}°C
              </h1>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="inline-block writing-mode-vertical text-right bg-red-200 p-2 rounded">
                {data.weather[0].main}
              </p>
            ) : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom flex mt-auto justify-evenly text-center p-4  bg-white-20">
            <div className="feels">
              {data.main ? (
                <p className=" inline-block rounded p-2 font-bold bg-green-400">
                  {data.main.feels_like.toFixed()}°C
                </p>
              ) : null}
              <p className="inline-block rounded p-2 m-2 bg-gray-200">Ressenti </p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className=" inline-block rounded p-2 font-bold bg-green-400">
                  {data.main.humidity}%
                </p>
              ) : null}
              <p className="inline-block rounded p-2 m-2 bg-gray-200">Humidité</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className=" inline-block rounded p-2 font-bold bg-green-400">
                  {convertWindSpeed(data.wind.speed).toFixed()} km/h
                </p>
              ) : null}
              <p className="inline-block rounded p-2 m-2 bg-gray-200">Vitesse du Vent</p>
            </div>
          </div>
        )}
        {/* <img src={cityImage} alt={location} className="w-full" /> */}
      </div>

      <div className="w-full md:w-4/5">
        {" "}
        {/* Ajouter cette div manquante */}
        {data.name !== undefined && (
          <iframe
            title="Carte de la ville"
            className="w-full h-96 md:h-full"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              data.coord?.lon - 0.1 || 0
            },${data.coord?.lat - 0.1 || 0},${data.coord?.lon + 0.1 || 0},${
              data.coord?.lat + 0.1 || 0
            }&layer=mapnik`}
          ></iframe>
        )}
      </div>
    </div>
  </div>
);
}

export default App;