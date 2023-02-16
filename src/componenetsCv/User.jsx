import { useState } from "react";
import {
  FaPhone,
  FaGlobe,
  FaFax,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import BilouImage from "../assets/BilouImage.png";

const User = () => {
  const [data] = useState({
    image: BilouImage,
    name: "Zaaraoui Bilel",
    title: "Developpeur Web & Web Mobile",
    email: "Bilelzara@gmail.com",
    phone: "0659165303",
    address: "4 place esquiros 13009",
    github: "https://github.com/Stinger1369",
  });

  return (
    <div className="flex flex-col items-center">
      <img
        src={data.image}
        alt={data.name}
        className="w-32 h-48 rounded-full mx-auto mb-4"
      />
      <div className="text-center">
        <div className="flex justify-center">
          <h2 className="text-2xl font-medium mt-2">{data.name}</h2>
        </div>
        <p className="text-sm font-medium mt-2">{data.title}</p>
        <h3 className="text-lg font-medium mt-5">Contact Info</h3>
        <ul className="list-none mt-2">
          <li className="flex items-center">
            <FaPhone className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.phone}</p>
          </li>
          <li className="flex items-center mt-2">
            <FaFax className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.email}</p>
          </li>
          <li className="flex items-center mt-2">
            <FaGlobe className="text-lg mr-2" />
            <a href="www.zaaraoui-bilel.com" className="text-sm font-medium">
              www.zaaraoui-bilel.com
            </a>
          </li>
          <li className="flex items-center mt-2">
            <FaLinkedin className="text-lg mr-2" />
            <a
              href="https://www.linkedin.com/in/bilel-zaaraoui/"
              className="text-sm font-medium"
            >
              https://www.linkedin.com/in/bilel-zaaraoui/
            </a>
          </li>
          <li className="flex items-center mt-2">
            <FaMapMarkerAlt className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.address}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
