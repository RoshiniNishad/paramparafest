import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SportsEventRules from "./SportsEventRules";

const sportsEvents = [
  {
    name: "Touch & Go",
    image: "src/assets/kho kho.jpg",
    description: "Experience the thrill of speed and strategy in Kho-Kho.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeLBvqeCCbIkG447JSQ1JG1-EHcb15CiP0gH7C8HjLX4k309Q/viewform",
  },
  {
    name: "Hu-Tu-Tu",
    image: "src/assets/kabaddi.jpg",
    description:
      "Unleash your strength and agility in the fast-paced game of Kabaddi.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaGZpNd6pgePjt2Z-GU7PtmqSszyWmxnw6IpvZ4IozOLHusQ/viewform",
  },
  {
    name: "Ping-Pong",
    image: "src/assets/table tenis.jpg",
    description: "Showcase your reflexes in an intense Table Tennis match.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScXWT286cqVuGkU4yluw5kzbi1UD_b6U6fSWpII5BUdRXl2OA/viewform",
  },
  {
    name: "Court Ball",
    image: "src/assets/basketball.jpg",
    description:
      "Dribble, shoot, and score in this exciting Basketball competition.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSccSl6L-sMMt5p1jpDcU8tDq29POGRSbSha39_baTvMJJGQsA/viewform",
  },
  {
    name: "Netball",
    image: "src/assets/volleyball.jpg",
    description:
      "Smash your way to victory in this high-energy Volleyball game.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf0Bt1HBrf3kX26M80Py5_AHvzMtqb5mg0T4_KMgjdA-tXlQQ/viewform",
  },
  {
    name: "Feather Ball",
    image: "src/assets/badminton.jpg",
    description:
      "Show your finesse and agility in a thrilling Badminton match.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScidEknE00e5C-DB7fqAUssJ290pBfaZh5Gwjrwko1QGTYhuQ/viewform",
  },
  {
    name: "The Game of Kings",
    image: "src/assets/chess.jpg",
    description:
      "Test your strategic brilliance in the timeless game of Chess.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSctDm-MDgYJqHONsgn1eX8feHofecQe8a6jW4uu_vmKU2wE9A/viewform",
  },
  {
    name: "Horizontal Leap",
    image: "src/assets/long-jump.jpg",
    description: "Defy gravity and push your limits in Long Jump.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScYmUFV699S6MlG6g3GZ8kNjmjVVZnnzcKjPg_b2fzt8Z4p3A/viewform",
  },
  {
    name: "Vertical Leap",
    image: "src/assets/high-jump.jpg",
    description:
      "Reach new heights and showcase your jumping skills in High Jump.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfL6zzn1-Fj-0k1U8lM5Al7Fr2EXOEk5WTc12YPVE93x-pDEQ/viewform",
  },
  {
    name: "Disc Hurl",
    image: "src/assets/discus-throw.jpg",
    description:
      "Display your strength and technique in the Discus Throw event.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSesnfVGyLubgkYcoMvDAKGNrDh3d57aBQUWcLQSUDp379XXJw/viewform",
  },
  {
    name: "Power Throw",
    image: "src/assets/shotput.jpg",
    description: "Show your power and precision in the Shotput competition.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfe0zb8JLH6F8aCKd2icxi1WIfD42_YHQ0HUrSyOZjmPVr2Fg/viewform",
  },
  {
    name: "Explosive Run",
    image: "src/assets/100m-race.jpg",
    description: "Race against time in the electrifying 100m sprint.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfdwh4Zn_9JRKQ-uuIG7zn0PU4g4_GxB9ROhY__A9srCdXa2g/viewform",
  },
  {
    name: "Finger Billiards",
    image: "src/assets/carrom.jpg",
    description: "Strike and pocket your way to victory in Carrom.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScVzm03iCndDBb6Mi2TGTP7hYEvnOP1ICC2BtcZ9HLtYExnRw/viewform",
  },
  {
    name: "Footy",
    image: "src/assets/football.jpg",
    description:
      "Show your skills and teamwork in an exhilarating Football match.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeKNKb0XPB_6Uxr-gG-EPrmX3j1hmb9V8xJ09Oq__pdWbDRHg/viewform",
  },
];

const SportsEvents = () => {
  // State to track which event's description is open on mobile
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open state only for mobile screens
  const handleCardClick = (index) => {
    // For larger screens, the hover effect handles this already.
    if (window.innerWidth >= 768) return;
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center py-10 px-5 relative overflow-hidden mt-5">
        <div className="flex flex-col items-center">
          <img
            src="src/assets/parampara.png"
            alt="Sports Events Logo"
            className="w-32 h-32 mb-4"
          />
          <div className="text-yellow-400 text-3xl md:text-5xl font-bold flex items-center gap-2 animate-title">
            <span>🏆</span>
            <span className="typing-animation">SPORTS EVENTS</span>
          </div>
        </div>
        <h1 className="text-gray-300 text-3xl mt-2 animate-text">
          क्रीड़ा-संगमा
        </h1>
        <p className="text-gray-300 mt-2 animate-text">
          "देश की माटी, देश का दम, आओ मिलकर खेलें हम!"
        </p>
        {/* Event Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10">
          {sportsEvents.map((event, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 hover:scale-105 group animate-box cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.name}
                className={`w-full h-48 object-cover transition duration-300 ${
                  // Blur effect remains for hover on larger screens
                  "group-hover:blur-md"
                }`}
              />
              {/* Overlay for larger screens */}
              <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-50 flex-col items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 p-4">
                <h3 className="text-white text-xl font-semibold">
                  {event.name}
                </h3>
                <p className="text-gray-300 text-sm text-center mt-2">
                  {event.description}
                </p>
                <a
                  href={event.applyLink}
                  className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
              {/* Mobile overlay: toggled on click */}
              {openIndex === index && (
                <div className="md:hidden absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {event.name}
                  </h3>
                  <p className="text-gray-300 text-sm text-center mt-2">
                    {event.description}
                  </p>
                  <a
                    href={event.applyLink}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <SportsEventRules />
      <Footer />
    </>
  );
};

export default SportsEvents;
