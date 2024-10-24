import React from 'react';
import { motion } from 'framer-motion';
import { Package, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ShelterOverview: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.div
      className="max-w-7xl mx-auto py-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Shelter Overview</h1>

      <motion.div
        className="mb-8 p-6 bg-blue-100 rounded-lg shadow-lg"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-2">Welcome to the Shelter Dashboard!</h2>
        <p className="mb-4">
          As a shelter or NGO, you can view and manage donations offered by local organizers. Here's a quick guide to get you started:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>View Donations:</strong> Browse available donations that you can claim.</li>
          <li><strong>Upcoming Requests:</strong> Keep track of your upcoming donation requests.</li>
          <li><strong>Support:</strong> Contact our support team for any inquiries or assistance.</li>
        </ul>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Donations Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          initial={{ y: 20 }}
          whileHover={{ y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Package className="mr-2 h-6 w-6 text-blue-600" />
            Available Donations
          </h2>
          <p className="text-gray-600 mb-2">Here’s a look at the donations you can claim:</p>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Donation from Local Restaurant - Available until Oct 30, 2024</li>
            <li className="text-gray-700">Food Drive - Available until Nov 15, 2024</li>
            <li className="text-gray-700">Community Meal Donation - Available until Nov 25, 2024</li>
          </ul>
        </motion.div>

        {/* Upcoming Requests Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          initial={{ y: 20 }}
          whileHover={{ y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <UserCircle className="mr-2 h-6 w-6 text-blue-600" />
            Upcoming Requests
          </h2>
          <p className="text-gray-600 mb-2">Here’s a look at your upcoming donation requests:</p>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Request for Community Kitchen - Needed by Oct 28, 2024</li>
            <li className="text-gray-700">Food Supplies for Holiday Event - Needed by Nov 20, 2024</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ShelterOverview;
