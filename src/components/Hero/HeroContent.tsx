import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
        <span className="block mb-2">Connecting excess food</span>
        <span className="block text-emerald-600">with those in need</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Join our mission to reduce food waste and help communities. 
        Connect event organizers with local shelters to make a difference.
      </p>
      <p className="mt-2 text-sm text-gray-500 max-w-2xl">
        Together, we can ensure that no meal goes to waste.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto"
        >
          <Link
            to="/signup"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition duration-200"
          >
            Get Started
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto"
        >
          <Link
            to="/about"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition duration-200"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
