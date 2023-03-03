import React, { useState, useEffect } from "react";
import axios from "axios";
import "./api.css";
import SearchBar from "./Components/SearchBar";
import WeatherInfo from "./Components/WeatherInfo";
import CityImageList from "./Components/CityImageList";
import CityMap from "./Components/CityMap";
import ImageGallery from "react-image-gallery";
function ApiMetJs() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [cityImages, setCityImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleSearchClick = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
    const cityImageUrl = `https://api.unsplash.com/search/photos?query=${location}&per_page=6&client_id=9WWM5FaAgR5NV2l-GsdjL5A1FK0hRUYkIgWJM7CIzXE`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setShowImages(true);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(cityImageUrl)
      .then((response) => {
        setCityImages(
          response.data.results.map((result) => result.urls.regular)
        );
      })
      .catch((error) => {
        console.log(error);
      });

    setLocation("");
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const openGallery = () => {
    setShowGallery(true);
  };

  const galleryItems = cityImages.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="">
      <div className="flex flex-col h-screen md:flex-row ">
        <div className="w-full md:w-2/6 mr-4">
          <div
            className="bg-cover "
            style={{
              backgroundImage: showImages ? `url(${cityImages[0]})` : undefined,
            }}
          >
            <SearchBar
              location={location}
              setLocation={setLocation}
              handleSearchClick={handleSearchClick}
              searchLocation={searchLocation}
            />
            <WeatherInfo data={data} />
          </div>
          {showImages && cityImages.length > 0 && (
            <CityImageList images={cityImages} onClick={openGallery} />
          )}
        </div>
        <div className="w-full md:w-4/5">
          {data.name !== undefined && <CityMap data={data} />}
        </div>
      </div>

      {showGallery && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 p-2text-white rounded-full bg-red-500 hover:bg-red-600"
              onClick={() => setShowGallery(false)}
            >
              X
            </button>
            <ImageGallery items={galleryItems} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiMetJs;