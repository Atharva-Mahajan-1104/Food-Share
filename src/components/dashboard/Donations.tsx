import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const ViewDonationsPage: React.FC = () => {
  const { user } = useAuth();

  // Sample donation data (replace with data fetched from the backend)
  const donations = [
    {
      id: '1',
      eventName: 'Food Drive at Local Market',
      location: '123 Market St',
      quantity: '50 kg',
      availableUntil: '2024-10-30',
      description: 'Leftover fruits and vegetables.',
      status: 'Available',
    },
    {
      id: '2',
      eventName: 'Charity Event',
      location: '456 Charity Ave',
      quantity: '30 meals',
      availableUntil: '2024-10-28',
      description: 'Prepared meals for distribution.',
      status: 'Available',
    },
  ];

  const handleClaimDonation = (donationId: string) => {
    // Logic to claim the donation (e.g., API call)
    console.log(`Claimed donation ID: ${donationId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-600">Available Donations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {donations.map((donation) => (
          <motion.div
            key={donation.id}
            className="border rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-emerald-700">{donation.eventName}</h2>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Quantity:</strong> {donation.quantity}</p>
            <p><strong>Available Until:</strong> {donation.availableUntil}</p>
            <p className="mb-4"><strong>Description:</strong> {donation.description}</p>
            <p className={`font-semibold ${donation.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {donation.status}
            </p>
            <button
              className="mt-4 bg-emerald-600 text-white py-2 px-6 rounded-lg shadow hover:bg-emerald-700 transition duration-200 ease-in-out transform hover:scale-105"
              onClick={() => handleClaimDonation(donation.id)}
            >
              Claim Donation
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ViewDonationsPage;
