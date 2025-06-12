import { motion } from "framer-motion";
import {
  FaRegSmile,
  FaUniversity,
  FaMoneyCheckAlt,
  FaShieldAlt,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const HowItWorks = () => {
  const features = [
    {
      title: "0% Platform Fees",
      desc: "Every rupee you raise goes directly to your campaign — no hidden charges.",
      icon: <FaRegSmile className="text-4xl text-amber-500 mb-4 mx-auto" />,
    },
    {
      title: "Student-Focused",
      desc: "Built specifically for students to support academic projects, hackathons, and startups.",
      icon: <FaUniversity className="text-4xl text-amber-500 mb-4 mx-auto" />,
    },
    {
      title: "Simple Wallet System",
      desc: "Add, donate, or withdraw funds with ease through our secure wallet integration.",
      icon: (
        <FaMoneyCheckAlt className="text-4xl text-amber-500 mb-4 mx-auto" />
      ),
    },
    {
      title: "Trusted & Transparent",
      desc: "Real-time tracking of donations, wallet history, and transparent funding details.",
      icon: <FaShieldAlt className="text-4xl text-amber-500 mb-4 mx-auto" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white mb-3">
      <h2 className="text-4xl font-bold text-center mb-6 text-amber-500">
        Here's Why Trust Us
      </h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-12"></div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
