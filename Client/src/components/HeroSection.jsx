import { FaRocket } from "react-icons/fa";
import bgImage from "../../assets/background1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-start justify-start">
      {/* Image - Full Width */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImage}
          alt="Lightbulb with plant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Text Content - Aligned to the Left */}
      <div className="relative z-10 text-left px-4 pl-8 pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-amber-300">
          Empower Big Ideas
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-xl text-gray-100">
          Fuel innovative projects, startups, and hackathons with our
          crowdfunding platform.
        </p>
        <button className="flex items-center justify-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-amber-700 transition-colors duration-200 shadow-md">
          <FaRocket className="w-5 h-5 mr-2" />
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
