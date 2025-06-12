import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaUserCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
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

const UserReview = () => {
  const reviews = [
    {
      name: "Aarav Patel",
      rating: 5,
      description:
        "FuelFundr made funding my hackathon project a breeze! The wallet system is super easy, and I love that there are no platform fees.",
    },
    {
      name: "Emma Chen",
      rating: 4,
      description:
        "Backed AIStudyBuddy and got updates every step of the way. Transparent and trustworthy platform for students like me!",
    },
    {
      name: "Rohan Gupta",
      rating: 5,
      description:
        "Raised $10K for my startup in 2 weeks! The student-focused vibe and real-time tracking are game-changers.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      description:
        "Supported Project Alpha, and the process was seamless. Clear updates and a platform that truly cares about students!",
    },
    {
      name: "Liam Nguyen",
      rating: 5,
      description:
        "FuelFundr helped my team fund our AI prototype post-hackathon. Best crowdfunding platform for student innovators!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine number of reviews to show based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3; // lg:grid-cols-3
    if (window.innerWidth >= 640) return 2; // sm:grid-cols-2
    return 1; // grid-cols-1
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on resize
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, reviews.length - visibleCount)
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${
            i < rating ? "text-amber-500" : "text-gray-600"
          }`}
          aria-label={i < rating ? "Filled star" : "Empty star"}
        />
      ));
  };

  return (
    <section className="py-16 bg-gray-900 text-white mb-3">
      <h2 className="text-4xl font-bold text-center mb-6 text-amber-500">
        What Students Say
      </h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-12"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews
            .slice(currentIndex, currentIndex + visibleCount)
            .map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-amber-500"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                tabIndex={0}
                role="region"
                aria-labelledby={`review-${currentIndex + i}`}
              >
                <div className="flex items-center mb-4">
                  <FaUserCircle
                    className="w-12 h-12 text-gray-500 mr-4"
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      id={`review-${currentIndex + i}`}
                      className="text-lg font-semibold text-white"
                    >
                      {review.name}
                    </h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm flex-grow">
                  {review.description}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ${
              currentIndex === 0
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
            aria-label="Previous reviews"
            tabIndex={currentIndex === 0 ? -1 : 0}
          >
            <FaArrowLeft className="text-white text-lg" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= reviews.length - visibleCount}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ${
              currentIndex >= reviews.length - visibleCount
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-amber-500 hover:bg-amber-600"
            }`}
            aria-label="Next reviews"
            tabIndex={currentIndex >= reviews.length - visibleCount ? -1 : 0}
          >
            <FaArrowRight className="text-white text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserReview;