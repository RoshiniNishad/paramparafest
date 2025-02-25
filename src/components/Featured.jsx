import React, { useState } from "react";

const featuredEvents = [
       {
        name: "Bug Hunters",
        image: "src/assets/bug hunters.jpg",
        description: 
          "Test your debugging skills by identifying errors in code. \
          Fix bugs and optimize the performance. Prove you're the ultimate bug hunter.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScIE1YSJa0hKQw93m3uLnDVK-pnDckVViCR-Cb9cZqYr1MYSg/viewform",
      },
      {
        name: "Code Titans",
        image: "src/assets/code titans.jpg",
        description: 
          "Compete in a fast-paced coding contest. Show your programming expertise. \
          Solve real-world challenges in record time and become a coding titan.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSerLUJ78rnbxebWu-LmUTYc3AyRj1LMO_fnwxRm1dENW_E0HQ/viewform",
      },
      {
        name: "Web Stack",
        image: "src/assets/web stack.jpg",
        description: 
          "Design stunning websites and web apps. Use modern technologies to build. \
          Showcase your skills in front-end and back-end web development.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScACU1amHKOM-YlnEEnOA4TX1aH7HusAekkrInpQW1YJtagLQ/viewform",
      },
      {
        name: "Mind Wars",
        image: "src/assets/mind wars.jpg",
        description: 
          "Test your mental prowess with complex puzzles. Think critically and solve. \
          Challenge your mind against other sharp contestants.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScbzpqrcfy-bcUxdqGWPGGf4zJ87-THmev1UJ1ZlXZgPgn_2A/viewform",
      },
      {
        name: "KOLAM",
        image: "src/assets/kolam.jpg",
        description:
          "Showcase your creativity with intricate and colorful rangoli designs. Express cultural beauty through vibrant patterns.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSflsBEPa3r8b0D1MIjKZbUIviLubLyRVuO0uXPH1BGqWM3_zQ/viewform",
      },
      {
        name: "KALATHILAKAM",
        image: "src/assets/kalathilakam.jpg",
        description:
          "Craft stunning flower pot arrangements and display your artistic skills in floral decor.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdvNWqyUp9tE9DX_iakb2vI9kbrqAT4xNujXeuRCF81hgtIAw/viewform",
      },
      {
        name: "SUR SAMAGAM",
        image: "src/assets/sur samagam.jpg",
        description:
          "Sing your heart out in this melodious competition. Show off your vocal talent and win hearts.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSe9Ge5dkkv4ajt9GAXg5NC1v379_IBzFI9wWXeeta3G2now8Q/viewform",
      },
      {
        name: "NRITYA KALA",
        image: "src/assets/nritya-kala.jpg",
        description:
          "Express yourself through graceful moves and powerful performances in this dance contest.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScvW5PWlf08NabG1r-RApnz0bYGP6fDAsM6F24Yq5yc0mzOrQ/viewform",
      },
      {
        name: "Touch & Go",
        image: "src/assets/kho kho.jpg",
        description: "Experience the thrill of speed and strategy in Kho-Kho.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeLBvqeCCbIkG447JSQ1JG1-EHcb15CiP0gH7C8HjLX4k309Q/viewform",
      },
      {
        name: "Hu-Tu-Tu",
        image: "src/assets/kabaddi.jpg",
        description:
          "Unleash your strength and agility in the fast-paced game of Kabaddi.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeaGZpNd6pgePjt2Z-GU7PtmqSszyWmxnw6IpvZ4IozOLHusQ/viewform",
      },
      {
        name: "Ping-Pong",
        image: "src/assets/table tenis.jpg",
        description: "Showcase your reflexes in an intense Table Tennis match.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLScXWT286cqVuGkU4yluw5kzbi1UD_b6U6fSWpII5BUdRXl2OA/viewform",
      },
      {
        name: "Court Ball",
        image: "src/assets/basketball.jpg",
        description:
          "Dribble, shoot, and score in this exciting Basketball competition.",
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSccSl6L-sMMt5p1jpDcU8tDq29POGRSbSha39_baTvMJJGQsA/viewform",
      }  

];

const FeaturedEvents = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center py-10 px-5 relative overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <div className="text-yellow-400 text-3xl md:text-5xl font-bold flex items-center gap-2 animate-title">
          <span>🎉</span>
          <span className="typing-animation">FEATURED EVENTS</span>
        </div>
        <p className="text-gray-300 mt-2 text-sm md:text-base animate-text">
          "Experience the best of our culture and creativity"
        </p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10 w-full max-w-6xl">
        {featuredEvents.map((event, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 group animate-box w-full mx-auto"
            onClick={() => toggleDescription(index)}>
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-40 sm:h-48 object-cover transition duration-300 group-hover:blur-md"
            />
            <div 
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-4 text-center ${visibleIndex === index ? 'opacity-90' : ''}`}>
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {event.name}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                {event.description}
              </p>
              <a
                href={event.applyLink}
                className="mt-3 bg-blue-500 text-white px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
