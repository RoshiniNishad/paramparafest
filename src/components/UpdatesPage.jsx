import React from "react";
import { Link } from "react-router-dom";
import Guests from "./Guests";
import Navbar from "./Navbar";
import Footer from "./Footer";

const categories = [
  {
    name: "Technical",
    link: "https://drive.google.com/drive/folders/1C8CJg4taPrlHjRDo44nS9-soZYjFDHcv?usp=drive_link",
    image: "src/assets/background.jpg",
  },
  {
    name: "Cultural",
    link: "https://drive.google.com/drive/folders/18SoJf__lYfHS0DS8Xol-0yIzTwtAsv_c?usp=drive_link",
    image: "src/assets/background.jpg",
  },
  {
    name: "Sports",
    link: "https://drive.google.com/drive/folders/1nPL4rUBJKEEgyBSrvqeo5hDsEkVdxNS6?usp=drive_link",
    image: "src/assets/background.jpg",
  },
  {
    name: "Convocation",
    link: "https://drive.google.com/drive/folders/18o9mK1pKMBgryUYAsUuC6K7PdRuY2__d?usp=drive_link",
    image: "src/assets/background.jpg",
  },
  {
    name: "Prize Distribution",
    link: "https://drive.google.com/drive/folders/1XDtx29l7hLkDdwEgo_DYcs4bUdN30RrO?usp=drive_link",
    image: "src/assets/background.jpg",
  },
  {
    name: "Others",
    link: "https://drive.google.com/drive/folders/1XiPk0olj8lTMI8MfqJjV-WtI5eeMSSwZ?usp=drive_link",
    image: "src/assets/background.jpg",
  },
];

const UpdatesPage = () => {
  return (
    <>
      <Navbar />
      <Guests />
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6"
        style={{
          background: "linear-gradient(to bottom, #E0F7FA, #FFFFFF)",
        }}>
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Event Highlights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="block w-72 h-48 md:w-80 md:h-56 rounded-lg shadow-xl border border-blue-300 text-white flex items-center justify-center text-xl font-bold transform hover:scale-105 transition-transform duration-300 bg-cover bg-center"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundColor: "rgba(30, 58, 138, 0.7)",
                backgroundBlendMode: "overlay",
              }}>
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg border border-white shadow-md">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdatesPage;
