import { motion } from "framer-motion";
import ProgressBar from "./ui/ProgressBar";
import { FaDollarSign } from "react-icons/fa";

const CampaignCard = ({ title, owner, goal, raised, image }) => {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white shadow-md rounded-xl overflow-hidden"
    >
      {/* Campaign Image */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">by {owner}</p>

        <div className="mb-3">
          <ProgressBar percentage={percentage} />
          <p className="text-sm text-gray-700 mt-1">
            <span className="font-semibold">${raised.toLocaleString()}</span>{" "}
            raised of ${goal.toLocaleString()}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 hover:cursor-pointer px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-semibold inline-flex items-center justify-center mt-auto"
        >
          <span className="flex items-center gap-2">
            Contribute
            <FaDollarSign className="w-5 h-5" />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CampaignCard;
