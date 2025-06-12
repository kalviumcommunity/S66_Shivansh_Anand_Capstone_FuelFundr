import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handlecreatecampaign = () => {
    navigate("/create-campaign");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-6 py-4">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold text-amber-500 mr-8">FuelFundr</h2>
        <ul className="flex flex-row space-x-6">
          <li>
            <a
              href="#"
              className={`${
                activeLink === "Home"
                  ? "text-amber-500 underline underline-offset-4"
                  : "text-gray-300 hover:text-amber-500"
              } transition-colors duration-200`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                activeLink === "Explore"
                  ? "text-amber-500 underline underline-offset-4"
                  : "text-gray-300 hover:text-amber-500"
              } transition-colors duration-200`}
              onClick={() => handleLinkClick("Explore")}
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                activeLink === "Create"
                  ? "text-amber-500 underline underline-offset-4"
                  : "text-gray-300 hover:text-amber-500"
              } transition-colors duration-200`}
              onClick={() => handleLinkClick("Create")}
            >
              Create
            </a>
          </li>
        </ul>
      </div>
      <ul className="flex flex-row space-x-4">
        <li>
          <button
            onClick={handlecreatecampaign}
            className="flex items-center hover:cursor-pointer bg-amber-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200"
          >
            <FaUserPlus className="w-5 h-5 mr-2" />
            Create Campaign
          </button>
        </li>
        <li>
          <button className="flex hover:cursor-pointer items-center bg-transparent border-2 border-amber-600 text-amber-600 font-semibold px-4 py-2 rounded-md hover:bg-amber-600 hover:text-white transition-colors duration-200">
            <BiLogIn className="w-5 h-5 mr-2" />
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
