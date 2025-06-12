import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import launchImg from "../../assets/Form.png";

const inputVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CreateCampaignForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    targetAmount: "",
    deadline: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.targetAmount) {
      newErrors.targetAmount = "Target amount is required";
    } else if (formData.targetAmount < 100) {
      newErrors.targetAmount = "Target amount must be at least $100";
    }
    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required";
    } else if (new Date(formData.deadline) <= new Date()) {
      newErrors.deadline = "Deadline must be a future date";
    }
    if (!formData.image) {
      newErrors.image = "Image is required";
    } else if (!["image/jpeg", "image/png"].includes(formData.image.type)) {
      newErrors.image = "Image must be JPEG or PNG";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Campaign Data:", {
      ...formData,
      user: "mockUserId",
      raisedAmount: 0,
    });
    alert("Campaign submitted! (Mock)");
    setFormData({
      title: "",
      description: "",
      category: "",
      targetAmount: "",
      deadline: "",
      image: null,
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start mb-4 mt-[-1.5rem]">
          <motion.button
            onClick={handleBack}
            className="bg-amber-500 hover:cursor-pointer text-white rounded-full p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-amber-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go back to previous page"
          >
            <FiArrowLeft className="text-xl" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700">
          {/* Left Side: Heading & Image */}
          <motion.div
            className="flex flex-col gap-4 pt-8 lg:pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-amber-500 mb-4 text-center">
              Launch Your Vision
            </h2>
            <img
              src={launchImg}
              alt="Illustration of a student launching a campaign"
              className="w-full max-w-full h-[500px] md:h-[550px] lg:h-[600px] object-cover rounded-lg"
            />
          </motion.div>

          {/* Right Side: Form Inputs */}
          <div className="flex flex-col space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Campaign Title
                </label>
                <motion.input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g., AIStudyBuddy"
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.title ? "true" : "false"}
                  aria-describedby={errors.title ? "title-error" : undefined}
                />
                {errors.title && (
                  <p id="title-error" className="mt-2 text-sm text-red-600">
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Campaign Description
                </label>
                <motion.textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  rows="5"
                  placeholder="Tell us about your campaign..."
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.description ? "true" : "false"}
                  aria-describedby={
                    errors.description ? "description-error" : undefined
                  }
                />
                {errors.description && (
                  <p
                    id="description-error"
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Category
                </label>
                <motion.select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.category ? "true" : "false"}
                  aria-describedby={
                    errors.category ? "category-error" : undefined
                  }
                >
                  <option value="">Select a category</option>
                  <option value="Startup">Startup</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Innovation">Innovation</option>
                </motion.select>
                {errors.category && (
                  <p id="category-error" className="mt-2 text-sm text-red-600">
                    {errors.category}
                  </p>
                )}
              </div>

              {/* Target Amount */}
              <div>
                <label
                  htmlFor="targetAmount"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Target Amount ($)
                </label>
                <motion.input
                  id="targetAmount"
                  name="targetAmount"
                  type="number"
                  value={formData.targetAmount}
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="0"
                  min="0"
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.targetAmount ? "true" : "false"}
                  aria-describedby={
                    errors.targetAmount ? "targetAmount-error" : undefined
                  }
                />
                {errors.targetAmount && (
                  <p
                    id="targetAmount-error"
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.targetAmount}
                  </p>
                )}
              </div>

              {/* Deadline */}
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Deadline
                </label>
                <motion.input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  min={new Date().toISOString().split("T")[0]}
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.deadline ? "true" : "false"}
                  aria-describedby={
                    errors.deadline ? "deadline-error" : undefined
                  }
                />
                {errors.deadline && (
                  <p id="deadline-error" className="mt-2 text-sm text-red-600">
                    {errors.deadline}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-300 text-left"
                >
                  Campaign Image
                </label>
                <motion.input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleChange}
                  className="mt-1 w-full bg-gray-900 text-gray-300 border-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 file:bg-amber-500 file:text-white file:rounded-lg file:border-none file:px-4 file:py-1"
                  whileFocus="focus"
                  variants={inputVariants}
                  aria-invalid={errors.image ? "true" : "false"}
                  aria-describedby={errors.image ? "image-error" : undefined}
                />
                {errors.image && (
                  <p id="image-error" className="mt-2 text-sm text-red-600">
                    {errors.image}
                  </p>
                )}
                {formData.image && (
                  <p className="mt-2 text-sm text-gray-400">
                    Selected: {formData.image.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition duration-300 text-lg font-semibold w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Campaign
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCampaignForm;
