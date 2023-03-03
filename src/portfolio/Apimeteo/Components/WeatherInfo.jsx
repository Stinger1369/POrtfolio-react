import React from "react";

function WeatherInfo({ data }) {
  const convertWindSpeed = (speed) => {
    // Conversion de miles par heure (MPH) en kilomètres par heure (km/h)
    return Math.round(speed * 1.60934);
  };

  return (
    <div className="pt-4">
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
          <p className=" inline-blockwriting-mode-vertical bg-red-200 p-2 rounded">
            {data.weather[0].main}
          </p>
        ) : null}
      </div>
      <div className="bottom flex mt-auto justify-evenly text-center p-4  bg-white-20">
        <div className="feels">
          {data.main ? (
            <p className=" inline-block rounded p-2 font-bold bg-green-400">
              {data.main.feels_like.toFixed()}°C
            </p>
          ) : null}
          <p className="inline-block rounded p-2 m-2 bg-gray-200">Ressenti</p>
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
          <p className="inline-block rounded p-2 m-2 bg-gray-200">
            Vitesse du Vent
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
