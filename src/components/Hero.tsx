import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Utensils, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import foodDonationImage from '../assets/Screenshot (321).png'; // Import the image

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col lg:flex-row items-center pt-10 pb-8 md:pt-12 lg:pt-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 flex-grow"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connecting Food</span>
              <span className="block text-emerald-600">with Those in Need</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              Reduce food waste. Help your community. Together, we can make a difference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/signup"
                  className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:text-lg"
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
                  className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:text-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex-grow">
            <img
              className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-lg shadow-xl"
              src={foodDonationImage} // Use the imported image here
              alt="Food donation"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="p-3 bg-emerald-100 rounded-full">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Make a Difference</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Help reduce waste while supporting your community.
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="p-3 bg-emerald-100 rounded-full">
              <Utensils className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Easy Donations</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Simple process to post and claim donations.
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none"
          >
            <div className="p-3 bg-emerald-100 rounded-full">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Community Impact</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Connect with local organizations and make an impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">How It Works</h2>
        <p className="mt-4 text-gray-500 text-center">
          Join our platform to easily donate or claim food. Our straightforward process makes it easy for everyone to participate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">1. Sign Up</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Create an account in seconds to get started.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">2. Post Donations</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Share your excess food with local shelters.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">3. Make an Impact</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Help those in need while reducing food waste.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-emerald-50 rounded-lg mt-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Join Us Today!</h2>
        <p className="mt-4 text-gray-500 text-center">
          Become a part of our growing community and help change lives through food donations.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/signup"
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm text-gray-500 text-center">
              "This platform has made it so easy to donate food. I love being a part of this initiative!"
            </p>
            <h3 className="mt-4 text-lg font-medium">- Sarah J.</h3>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm text-gray-500 text-center">
              "A simple way to connect with those in need. I highly recommend it!"
            </p>
            <h3 className="mt-4 text-lg font-medium">- David R.</h3>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm text-gray-500 text-center">
              "I've been able to help so many people through this platform. It's truly rewarding!"
            </p>
            <h3 className="mt-4 text-lg font-medium">- Jessica T.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
