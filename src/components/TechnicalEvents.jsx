import React, { useState } from "react";
import "./TechnicalEvents.css"; // Importing CSS for animations
import Navbar from "./Navbar";
import Footer from "./Footer";
import TechnicalEventRules from "./TechnicalEventRules";

const events = [
  {
    name: "Bug Hunters",
    image: "src/assets/bug hunters.jpg",
    description:
      "Test your debugging skills by identifying errors in code. \
      Fix bugs and optimize the performance. Prove you're the ultimate bug hunter.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScIE1YSJa0hKQw93m3uLnDVK-pnDckVViCR-Cb9cZqYr1MYSg/viewform",
  },
  {
    name: "Code Titans",
    image: "src/assets/code titans.jpg",
    description:
      "Compete in a fast-paced coding contest. Show your programming expertise. \
      Solve real-world challenges in record time and become a coding titan.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSerLUJ78rnbxebWu-LmUTYc3AyRj1LMO_fnwxRm1dENW_E0HQ/viewform",
  },
  {
    name: "Web Stack",
    image: "src/assets/web stack.jpg",
    description:
      "Design stunning websites and web apps. Use modern technologies to build. \
      Showcase your skills in front-end and back-end web development.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScACU1amHKOM-YlnEEnOA4TX1aH7HusAekkrInpQW1YJtagLQ/viewform",
  },
  {
    name: "Mind Wars",
    image: "src/assets/mind wars.jpg",
    description:
      "Test your mental prowess with complex puzzles. Think critically and solve. \
      Challenge your mind against other sharp contestants.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScbzpqrcfy-bcUxdqGWPGGf4zJ87-THmev1UJ1ZlXZgPgn_2A/viewform",
  },
  {
    name: "Speed Hackers",
    image: "src/assets/speed hackers.jpg",
    description:
      "Solve coding challenges under tight time limits. Speed and accuracy are key. \
      Prove your quick thinking and coding agility.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdso4iDvdkDAfHajxhJjzy3rxdZmwSDM-5-G4H7pGpePlJ8vg/viewform",
  },
  {
    name: "Robo Rumble",
    image: "src/assets/robo rumble.jpg",
    description:
      "Build robots to face off in a battle of wits and strength. Control and program. \
      Compete to see which robot reigns supreme.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJTAPoyUILWc2KcjOwcBfsnWBtNE0tJ2VUMBd8iQPhJ3bLcA/viewform",
  },
  {
    name: "Setu Shrishti",
    image: "src/assets/setu shrishti.jpg",
    description:
      "Create innovative solutions with limited resources. Build structures that impress. \
      Let your creativity shine in this engineering challenge.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeHAtBxVagJev3UHL0C59JUowVANwiSWgH-nnDAduimR_Q1FQ/viewform",
  },
  {
    name: "Discord of Minds",
    image: "src/assets/discord of minds.jpg",
    description:
      "Engage in intellectual debates and discussions. Form your arguments and defend them. \
      Compete with others in the ultimate battle of words and wits.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScuS2Gl4FW8tX4Y3M7bhX8UZMZK0RnW8opGO9hm7m940jRmSA/viewform",
  },
  {
    name: "Junk Yard",
    image: "src/assets/junk yard.jpg",
    description:
      "Repurpose scrap and junk into useful gadgets or art. Show off your creativity. \
      Make something functional or artistic from discarded materials.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScuepyxmyPdTd2TF6NSazV3Fs-Uv1jb7lJRY3cozcZuN_U_GQ/viewform",
  },
  {
    name: "Rubik’s Ruckus",
    image: "src/assets/rubick ruckus.jpg",
    description:
      "Solve the Rubik's cube and other mind-bending puzzles. Race against the clock. \
      Challenge yourself and test your puzzle-solving skills.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfa7lDCCVNQLT00T34sOlwRrjK4i_Q7y5ZEzjxAL5FWurreMg/viewform",
  },
  {
    name: "Inceptive Arena",
    image: "src/assets/inceptive arena.jpg",
    description:
      "Face futuristic challenges that require innovative thinking. Solve problems creatively. \
      Showcase your forward-thinking and strategic skills.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScF_NPdgbJlOiETkVO_PVp679J2Ud0HbIPUC6nX669kAtNtow/viewform",
  },
  {
    name: "Design Flux",
    image: "src/assets/design flux.jpg",
    description:
      "Design sleek and user-friendly UI/UX interfaces. Create stunning prototypes. \
      Bring your design vision to life with style and functionality.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfsel9hZuJJKMgBBKTsAFEBwbrZZwkyu-EH2Fe3wNEIpyrT2g/viewform",
  },
  {
    name: "BGMI",
    image: "src/assets/bgmi.jpg",
    description:
      "Compete in a battle royale for survival. Show your strategy and shooting skills. \
      Be the last one standing and claim victory in BGMI.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdbamgXfiH1s9iNR0OoKA55dHqMNX29yyfV6TUijTg8eEjYrg/viewform",
  },
  {
    name: "Riddle Masters",
    image: "src/assets/riddle masters.jpg",
    description:
      "Solve a series of tricky riddles and puzzles. Put your logic and problem-solving skills to the test. \
      Can you be the Riddle Master?",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdR2_KinPirbmP52rYvZ7GDddQDYbNuY4Ob6GukUVc8sFezyQ/viewform",
  },
  {
    name: "Medi Quest",
    image: "src/assets/medi quest.jpg",
    description:
      "Embark on an interactive journey exploring medicine and healthcare. Solve healthcare-related challenges. \
      Test your knowledge in the field of medicine.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfureGPh3koZGP5GVCxjjMWGuIHXLUx1Rx-DaZj_p3Mjq7mnQ/viewform",
  },
  {
    name: "Lens Master",
    image: "src/assets/lens master.jpg",
    description:
      "Capture moments and master the art of photography. Show your creativity through the lens. \
      Take stunning photos and compete with others.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf6jEiNF0zTmXCppqOxi7E8KN21bk3ga4snqenbK8S0TjDpxw/viewform",
  },
  {
    name: "Futuristic Fiction Writing",
    image: "src/assets/futuristic fiction writing.jpg",
    description:
      "Write captivating futuristic short stories. Challenge your creativity and imagination. \
      Explore the world of sci-fi and fantasy in this writing competition.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdvjELnHEooZFoubdiDB3X9Z5spPLC7jVYr0-eQM4jI1qAc_Q/viewform",
  },
  {
    name: "Circuit Design",
    image: "src/assets/circuit design.jpg",
    description:
      "Design and build creative electrical circuits. Challenge your understanding of electronics. \
      Test your skills in this exciting engineering event.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeF_tYv9TQn-TRWXTEE8gHUf09yXNy6meTCtreod8h6Pe4aUQ/viewform",
  },
  {
    name: "Science Exhibition (Senior)",
    image: "src/assets/science exhibition senior.jpg",
    description:
      "Present your scientific projects and innovations. Show your creativity in problem-solving. \
      Compete in the senior science exhibition and showcase your knowledge.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfcHQARKBBxYHa-RyrgYpo0ZqtZttExdVdIti3oBkdFwlyWlg/viewform",
  },
  {
    name: "Science Exhibition (Junior)",
    image: "src/assets/science exhibition junior.jpg",
    description:
      "Participate in the junior science exhibition. Create innovative projects for the younger audience. \
      Display your curiosity and skills in the world of science.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScjuoKaQgjTCg8Hvct7WxGVlQXmRYj_1caDo6uRfhl8ZeHrhA/viewform",
  },
  {
    name: "Free Fire",
    image: "src/assets/free fire.jpg",
    description:
      "Battle in the world of Free Fire. Showcase your combat and strategy skills. \
      Compete to be the last survivor in this thrilling game.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScxFOduyvBz_p8G3F728HD5edJvrGEyUv8AsVFsJPpHAIyq7w/viewform",
  },
  {
    name: "Tech Tambola",
    image: "src/assets/tech tambola.jpg",
    description:
      "Play the traditional tambola game with a tech twist. Enjoy a fun-filled and engaging event. \
      Win prizes while testing your luck in this exciting event.",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfExR8HmqsPzX5FW0dmN0YYCGoIaAy8arT3Gr-2v-fw0SDYfA/viewform",
  },
];

const TechnicalEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleDescription = (index) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center py-10 px-5 relative overflow-hidden mt-5">
        {/* Floating Brackets */}
        <div className="floating-elements">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`brackets brackets${i + 1}`}>
              {i % 3 === 0 ? "{}" : i % 3 === 1 ? "</>" : "<>"}
            </div>
          ))}
        </div>

        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <img
            src="src/assets/parampara.png"
            alt="Technical Events Logo"
            className="w-32 h-32 mb-4"
          />
          <div className="text-blue-400 text-3xl md:text-5xl font-bold flex items-center gap-2 animate-title">
            <span>⚙️</span>
            <span className="typing-animation">TECHNICAL EVENTS</span>
          </div>
        </div>
        <h1 className="text-gray-300 text-3xl mt-2 animate-text">उद्भव</h1>
        <p className="text-gray-300 mt-2 animate-text">
          "कोड में जादू, तकनीक का कमाल, नवाचार से बदलें, दुनिया का हाल!"
        </p>

        {/* Event Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 group animate-box"
              onClick={() => toggleDescription(index)}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover transition duration-300 group-hover:blur-md"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 p-4 ${selectedEvent === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
                <h3 className="text-white text-xl font-semibold">{event.name}</h3>
                <p className="text-gray-200 text-sm mt-2 text-center">{event.description}</p>
                <a
                  href={event.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TechnicalEventRules />
      <Footer />
    </>
  );
};

export default TechnicalEvents;
