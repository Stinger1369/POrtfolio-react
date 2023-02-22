import { useState } from "react";
import {
  FaPhone,
  FaGlobe,
  FaFax,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BilouImage from "../assets/BilouImage.png";

const User = () => {
  const [data] = useState({
    image: BilouImage,
    name: "Zaaraoui Bilel",
    title: "Developpeur Web & Web Mobile",
    email: "bil@zara-bil.fr",
    phone: "0659165303",
    address: "4 place esquiros 13009",
    github: "https://github.com/Stinger1369",
  });

  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={data.image}
        alt={data.name}
        className="w-32 h-48 rounded-full mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      <div className="text-center">
        <div className="flex justify-center">
          <motion.h2
            className="text-2xl font-medium mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {data.name}
          </motion.h2>
        </div>
        <motion.p
          className="text-sm font-medium mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {data.title}
        </motion.p>
        <motion.h3
          className="text-lg font-medium mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Info
        </motion.h3>
        <motion.ul
          className="list-none mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.li
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaPhone className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.phone}</p>
          </motion.li>
          <motion.li
            className="flex items-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaFax className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.email}</p>
          </motion.li>
          <motion.li
            className="flex items-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaGlobe className="text-lg mr-2" />
            <a href="www.zaaraoui-bilel.com" className="text-sm font-medium">
              www.zara-bil.fr
            </a>
          </motion.li>
          <motion.li
            className="font-signature  flex items-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FaLinkedin className="text-lg  mr-2" />
            <a
              href="https://www.linkedin.com/in/bilel-zaaraoui/"
              className="text-xl font-medium"
            >
              Bilel-Zaaraoui
            </a>
          </motion.li>
          <motion.li
            className="flex items-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaMapMarkerAlt className="text-lg mr-2" />
            <p className="text-sm font-medium">{data.address}</p>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default User;