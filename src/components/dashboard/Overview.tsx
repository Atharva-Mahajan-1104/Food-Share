import React from 'react';
import { motion } from 'framer-motion';
import { Package, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Overview: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.div
      className="max-w-7xl mx-auto py-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-600">Organizer Overview</h1>

      <motion.div
        className="mb-8 p-6 bg-emerald-100 rounded-lg shadow-lg"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-2">Welcome to the Organizer Dashboard!</h2>
        <p className="mb-4">
          As an organizer, you can create and manage food donation offers to help local shelters and NGOs. Here's a quick guide to get you started:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Creating Donations:</strong> Use the "Post Donation" form to list available food.</li>
          <li><strong>Managing Donations:</strong> Keep track of your donations by checking the status updates.</li>
          <li><strong>Past Donations:</strong> Review completed donations to analyze your impact.</li>
          <li><strong>Need Help?</strong> Reach out to our support team through the help section if you have any questions.</li>
        </ul>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Donations Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          initial={{ y: 20 }}
          whileHover={{ y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Package className="mr-2 h-6 w-6 text-emerald-600" />
            Upcoming Donations
          </h2>
          <p className="text-gray-600 mb-2">Here’s a look at the donations you have scheduled:</p>
          {/* Render upcoming donations here */}
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Donation to Local Shelter - Oct 30, 2024</li>
            <li className="text-gray-700">Food Drive Event - Nov 15, 2024</li>
            <li className="text-gray-700">Thanksgiving Meal Donation - Nov 25, 2024</li>
          </ul>
        </motion.div>

        {/* Past Donations Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          initial={{ y: 20 }}
          whileHover={{ y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <UserCircle className="mr-2 h-6 w-6 text-emerald-600" />
            Past Donations
          </h2>
          <p className="text-gray-600 mb-2">Here's what you have accomplished so far:</p>
          {/* Render past donations here */}
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Donation to Local Shelter - Completed on Oct 1, 2024</li>
            <li className="text-gray-700">Community Food Drive - Completed on Sept 15, 2024</li>
            <li className="text-gray-700">Holiday Meal Donation - Completed on Dec 20, 2023</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Overview;
