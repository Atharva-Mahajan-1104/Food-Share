import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const ViewPastDonationsPage: React.FC = () => {
  const { user } = useAuth();

  // Sample past donation data (replace with data fetched from the backend)
  const pastDonations = [
    {
      id: '1',
      eventName: 'Food Drive at Local Market',
      location: '123 Market St',
      quantity: '50 kg',
      claimedDate: '2024-10-15',
      status: 'Completed',
    },
    {
      id: '2',
      eventName: 'Charity Event',
      location: '456 Charity Ave',
      quantity: '30 meals',
      claimedDate: '2024-10-20',
      status: 'Completed',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-emerald-600">Past Donations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pastDonations.map((donation) => (
          <motion.div
            key={donation.id}
            className="border rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold">{donation.eventName}</h2>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Quantity:</strong> {donation.quantity}</p>
            <p><strong>Claimed Date:</strong> {donation.claimedDate}</p>
            <p className={`font-semibold ${donation.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {donation.status}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ViewPastDonationsPage;
