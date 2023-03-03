import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function CityImageList(props) {
  const { images, onClick } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
      {images.map((image, index) => (
        <ModalImage
          key={index}
          small={image}
          large={image}
          alt={`City image ${index}`}
          className="h-32 w-full object-cover cursor-pointer"
          onClick={onClick.bind(null, index)}
          closeText="Fermer"
          imageCaption={`City image ${index + 1} sur ${images.length}`}
          imageBackgroundColor="#fff"
          showRotate={false}
          showFullscreenBtn={false}
          showCloseBtn={false}
          customModalStyles={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              border: "none",
              borderRadius: "none",
              padding: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
            },
          }}
          customHeader={
            <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-white">
              <button
                className="text-gray-500 hover:text-white focus:outline-none w-6 h-6"
                onClick={handlePreviousImage}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <h2 className="text-lg font-bold">{`City image ${index + 1}`}</h2>
              <button
                className="text-gray-500 hover:text-white focus:outline-none w-6 h-6"
                onClick={handleNextImage}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          }
        />
      ))}
    </div>
  );
}

export default CityImageList;
