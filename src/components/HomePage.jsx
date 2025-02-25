import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../assets/itmlogo.png";
import additionalLogo from "../assets/parampara.png";
import anniversaryLogo from "../assets/param25.jpg";
import backgroundImage from "../assets/background.webp";
import Featured from "./Featured";
import ContactUs from "./ContactPage";
import Navbar from "./Navbar";
import DirectorsDesk from "./DirectorDesk";
import Footer from "./Footer";

const events = {
  Technical: [
    "Bug Hunters",
    "Code Titans",
    "Web Stack",
    "Mind Wars",
    "Speed Hackers",
  ],
  Cultural: [
    "Evocation",
    "Gigwar",
    "Joke-A-Palooza",
    "Trash to Treasure",
    "Dumb Charades",
  ],
  Sports: ["HU-TU-TU", "Soccer", "Court Ball", "Net Ball", "The Game of Kings"],
};

const HomePage = () => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen text-black">
        <div
          className="absolute top-0 w-full h-full bg-cover bg-center mt-15"
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>

        <div className="relative z-10 pt-24 text-center text-white">
          <div className="flex flex-wrap justify-center items-center gap-4 ">
            <img src={logo} alt="Left Logo" className="h-16 sm:h-20 md:h-30" />
            <img
              src={anniversaryLogo}
              alt="25 Year Anniversary"
              className="h-24 sm:h-32 md:h-40 rounded-2xl"
            />
            <img
              src={additionalLogo}
              alt="Right Logo"
              className="h-16 sm:h-20 md:h-30"
            />
          </div>
          <h1 className="text-3xl mt-2 sm:text-5xl md:text-6xl font-bold animate-fadeIn text-amber-400">
            रजत जयंती वर्ष
          </h1>
          <p className="text-xl sm:text-3xl md:text-4xl font-bold animate-slideIn text-amber-50">
            शिक्षा, संस्कार, नवाचार <br />
            <strong className="text-amber-500 text-5xl">19,20,21 <strong className="text-amber-600">March</strong> </strong>
          </p>
        </div>

        <div className="relative z-10 pt-10 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 mt-10">
            {Object.entries(events).map(([category, eventList]) => (
              <div
                key={category}
                className="p-10 rounded-xl shadow-lg w-full max-w-sm transform animate-float relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}>
                <h2 className="text-xl font-bold mb-4 text-white">
                  {category}
                </h2>
                <ul className="list-disc pl-4">
                  {eventList.map((event, index) => (
                    <li
                      key={index}
                      className={`text-white opacity-0 ${
                        animate ? "animate-slideDown" : ""
                      }`}>
                      {event}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${category.toLowerCase()}`}
                  className="mt-4 inline-block text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-800">
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            
            @keyframes fadeIn {
              0% { opacity: 0; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 1.5s ease-in-out;
            }
            
            @keyframes slideIn {
              0% { opacity: 0; transform: translateX(-20px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            .animate-slideIn {
              animation: slideIn 1.5s ease-in-out;
            }
            
            @keyframes slideDown {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-slideDown {
              animation: slideDown 1s ease-in-out forwards;
            }
          `}
        </style>
      </div>
      <DirectorsDesk />
      <Featured />
      <ContactUs />
    </>
  );
};

export default HomePage;
