import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <motion.div
      className="max-w-lg mx-auto py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-emerald-700">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-3 text-lg"><strong>Name:</strong> {user?.name || 'N/A'}</p>
        <p className="mb-3 text-lg"><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p className="mb-3 text-lg"><strong>Role:</strong> {user?.role || 'N/A'}</p>
      </div>
    </motion.div>
  );
};

export default Profile;
