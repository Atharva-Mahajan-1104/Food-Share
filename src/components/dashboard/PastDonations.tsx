import React from 'react';
import { motion } from 'framer-motion';

interface Donation {
  id: string;
  foodType: string;
  quantity: number;
  date: string;
  description: string;
  status: string; // Added status to the donation interface
}

// Dummy data for past donations
const dummyDonations: Donation[] = [
  {
    id: '1',
    foodType: 'Pasta',
    quantity: 50,
    date: '2024-10-20',
    description: 'Leftover pasta from the charity event.',
    status: 'Completed', // Example status
  },
  {
    id: '2',
    foodType: 'Salad',
    quantity: 30,
    date: '2024-10-22',
    description: 'Fresh salad available after the community lunch.',
    status: 'Pending', // Example status
  },
  {
    id: '3',
    foodType: 'Pizza',
    quantity: 20,
    date: '2024-10-23',
    description: 'Extra pizza from the party last night.',
    status: 'Delivered', // Example status
  },
];

const PastDonations: React.FC = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-emerald-700">Past Donations</h1>
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-emerald-200">
          <tr>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Food Type</th>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Quantity</th>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Status</th> {/* New column for status */}
          </tr>
        </thead>
        <tbody>
          {dummyDonations.length > 0 ? (
            dummyDonations.map((donation) => (
              <motion.tr
                key={donation.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="border-b border-gray-300 hover:bg-emerald-100"
              >
                <td className="px-4 py-2">{donation.foodType}</td>
                <td className="px-4 py-2">{donation.quantity}</td>
                <td className="px-4 py-2">{donation.date}</td>
                <td className="px-4 py-2">{donation.description}</td>
                <td className="px-4 py-2">{donation.status}</td> {/* Displaying status */}
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="border-b border-gray-300 px-4 py-2 text-center">
                No past donations found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
};

export default PastDonations;
