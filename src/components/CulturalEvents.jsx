import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CulturalEventRules from "./CulturalEventRules";

const events = [
  {
    name: "KOLAM",
    image: "src/assets/kolam.jpg",
    description:
      "Showcase your creativity with intricate and colorful rangoli designs. Express cultural beauty through vibrant patterns.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSflsBEPa3r8b0D1MIjKZbUIviLubLyRVuO0uXPH1BGqWM3_zQ/viewform",
  },
  {
    name: "KALATHILAKAM",
    image: "src/assets/kalathilakam.jpg",
    description:
      "Craft stunning flower pot arrangements and display your artistic skills in floral decor.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvNWqyUp9tE9DX_iakb2vI9kbrqAT4xNujXeuRCF81hgtIAw/viewform",
  },
  {
    name: "SUR SAMAGAM",
    image: "src/assets/sur samagam.jpg",
    description:
      "Sing your heart out in this melodious competition. Show off your vocal talent and win hearts.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe9Ge5dkkv4ajt9GAXg5NC1v379_IBzFI9wWXeeta3G2now8Q/viewform",
  },
  {
    name: "NRITYA KALA",
    image: "src/assets/nritya-kala.jpg",
    description:
      "Express yourself through graceful moves and powerful performances in this dance contest.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScvW5PWlf08NabG1r-RApnz0bYGP6fDAsM6F24Yq5yc0mzOrQ/viewform",
  },
  {
    name: "EVOCATION",
    image: "src/assets/evocation.jpg",
    description:
      "Unleash your imagination by creating thought-provoking posters. Express through art.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeZNEApmK7gBlP5IgbXAQ9foUrUZex-w5NhTyJFKZdpnTNOsQ/viewform",
  },
  {
    name: "GIG WAR",
    image: "src/assets/gig war.jpg",
    description:
      "Battle of the bands! Showcase your musical talent and rock the stage with electrifying performances.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfKyM3yz2Yv-AA3_ay16MC3eun4fyT9QubhqBmlmC7EbDv0XA/viewform",
  },
  {
    name: "NATYA MANCHAN",
    image: "src/assets/natya manchan.jpg",
    description:
      "Bring stories to life with powerful acting and compelling storytelling in this skit competition.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSepqv10q54ErIyv6AKz2ppT_TuKnsyZG_fJfIHH7cT1Z9mTYA/viewform",
  },
  {
    name: "JOKE-A-PALOOZA",
    image: "src/assets/joke a palooza.jpg",
    description:
      "Get ready for a laughter ride! Show your comedy skills and entertain the audience.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQGT_7SqFfAoiymHQjRlboOlhoH06yuDKO7VbbYadJEuR1jw/viewform",
  },
  {
    name: "TRASH TO TREASURE",
    image: "src/assets/trash to treasure.jpg",
    description:
      "Transform waste into wonderful creations. Exhibit your creativity in recycling and upcycling.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScJd8KZ8FeTaBbDZQZezyGYylnYSgvVKaPOCy1ICxtAXBCahw/viewform",
  },
  {
    name: "MENDHIKA DESIGN",
    image: "src/assets/mendhika design.avif",
    description:
      "Create mesmerizing mehndi designs and showcase your artistic henna skills.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdV9UKZqO0afn-w4h4bNJAObUq-JG8B87vrnhWBwGNDIYISQw/viewform",
  },
  {
    name: "DUMB CHARADES",
    image: "src/assets/dumb charades.jpg",
    description:
      "Guess the words through expressive gestures in this exciting game of Dumb Charades.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfBYJivpSDC066sStLxWUyMU2tJMpaNT5E7urt0yaDZ9F0p4g/viewform",
  },
  {
    name: "MUKTAKK",
    image: "src/assets/muktak.avif",
    description:
      "Express your emotions through beautifully crafted poetry in this poetic battle.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeJu997sindoA6Xh77qXADh89o4F9mLHJ31DMBbJAZiGI3g4g/viewform",
  },
  {
    name: "ARTISTIC MAKEUP",
    image: "src/assets/artistic makeup.jpg",
    description:
      "Turn faces into stunning canvases with artistic makeup and face painting designs.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScS1_Y9f2sfd5_QfPM4HrxUp5BS3Y_iUrekCyYUHn2LGfotfQ/viewform",
  },
  {
    name: "NAKHSHILP",
    image: "src/assets/nakhshilp.jpg",
    description:
      "Showcase your nail art creativity with unique and intricate designs.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfpJhPsAde2vrLwTM1GEaLQpdRPPmiX06aMLyuwBXjqbuH2rw/viewform",
  },
  {
    name: "TULSI RAMAYANA PADDANT",
    image: "src/assets/tulsi ramayana paddant.jpg",
    description:
      "Engage in a unique Ramcharit Manas Antakshari competition that celebrates our heritage.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSevcfmWvYI1yf9M3Ioo0e0raDZuvYUKas9L5w7ZAhZm3YcRZw/viewform",
  },
  {
    name: "TRADITIONAL TRIVIA",
    image: "src/assets/traditional trivia.jpg",
    description:
      "Test your knowledge of cultural heritage in this exciting heritage quiz.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSffMhqdQXjLDcJLQFwe2__fUp32LFnvwRFLs4aQ3RzxhIfEyw/viewform",
  },
  {
    name: "SHANKHNAAD PRATIYOGITA",
    image: "src/assets/shankhnaad pratiyogita.jpg",
    description:
      "Showcase your skill in blowing the conch in this unique traditional competition.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe5Cyi9XEICalKWQNWktpF43cQwWF0mfGQWfhgI4SBLnq6Vgg/viewform",
  },
  {
    name: "VO-PHY APING",
    image: "src/assets/vo-phy aping.jpg",
    description:
      "Mimic your favorite personalities and entertain the audience with spot-on impressions.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdeFiaGwS8RSlBTHmMnJNUW669-uduD5R68q9lo2FvrVaBNUw/viewform",
  },
  {
    name: "ZIGGURAT",
    image: "src/assets/ziggurat.jpg",
    description:
      "Construct creative and stunning pyramids in this engaging architectural challenge.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfowNC5eafLBlOe3r9IOLpm-AdLxqQWvlDw0dN1D8B6s4c9IA/viewform",
  },
  {
    name: "CINESTAA",
    image: "src/assets/cinestaa.jpg",
    description:
      "Showcase your love for cinema in this exciting film-based event. A paradise for movie buffs!",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdf3uc1tDdrZQYh2l2DEn130xL2nhEz6QL5kAHJ8u8HpeHrXQ/viewform",
  },
];

const CulturalEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center py-10 px-5 relative overflow-hidden mt-5">
        <div className="flex flex-col items-center">
          <img
            src="src/assets/parampara.png"
            alt="Cultural Events Logo"
            className="w-32 h-32 mb-4"
          />
          <div className="text-yellow-400 text-3xl md:text-5xl font-bold flex items-center gap-2 animate-title">
            <span>🎭</span> <span className="typing-animation">CULTURAL EVENTS</span>
          </div>
        </div>
        <h1 className="text-gray-300 text-3xl mt-2 animate-text">कला संगमा</h1>
        <p className="text-gray-300 mt-2 animate-text">"हमारी संस्कृति हमारी विरासत"</p>
        
        {/* Event Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10 w-full max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 group animate-box cursor-pointer"
              onClick={() => handleEventClick(event)}>
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover transition duration-300 group-hover:blur-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 p-4 hidden sm:flex">
                <h3 className="text-white text-xl font-semibold">{event.name}</h3>
                <p className="text-gray-300 text-sm text-center mt-2">{event.description}</p>
                <a
                  href={event.applyLink}
                  className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                  Apply Now
                </a>
              </div>
              {/* Mobile View: Show description when clicked */}
              {selectedEvent === event && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 sm:hidden">
                  <h3 className="text-white text-xl font-semibold">{event.name}</h3>
                  <p className="text-gray-300 text-sm text-center mt-2">{event.description}</p>
                  <a
                    href={event.applyLink}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <CulturalEventRules />
      <Footer />
    </>
  );
};

export default CulturalEvents;
