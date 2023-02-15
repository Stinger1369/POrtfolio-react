import React, { useState } from "react";
import axios from "axios";
import "./api.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

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
    <div className="h-screen h-full flex items-center justify-center bg-blue-300">
      <div className="w-s h-full p-4 rounded-lg border-2 border-white-800 bg-gray-200 text-center sm:w-96 md:w-4/5 lg:w-4/5 mt-0 flex">
        <div className="w-1/5">
          <div className="search mb-4">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Entrer le nom de la ville"
              className="py-2 px-4 rounded-lg border border-white-800 bg-green-300 text-red-500 text-lg placeholder-bleu-500 w-full"
              type="text"
            />
          </div>
          <div className="top w-full my-4">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom flex mt-auto justify-evenly text-center p-4 rounded-lg bg-white-20">
              <div className="feels">
                {data.main ? (
                  <p className=" p-2 font-bold">
                    {data.main.feels_like.toFixed()}°C
                  </p>
                ) : null}
                <p className="m-2">Ressenti </p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className=" p-2 font-bold">{data.main.humidity}%</p>
                ) : null}
                <p className="m-2" >Humidité</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className=" p-2 font-bold">
                    {convertWindSpeed(data.wind.speed).toFixed()} km/h
                  </p>
                ) : null}
                <p>Vitesse du Vent</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-4/5  bg-gray-400"></div>
      </div>
    </div>
  );
}

export default App;