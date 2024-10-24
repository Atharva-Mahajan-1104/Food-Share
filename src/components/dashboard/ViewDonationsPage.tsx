import React from 'react';
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
      <h1 className="text-2xl font-bold mb-4">Available Donations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donations.map((donation) => (
          <div key={donation.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{donation.eventName}</h2>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Quantity:</strong> {donation.quantity}</p>
            <p><strong>Available Until:</strong> {donation.availableUntil}</p>
            <p><strong>Description:</strong> {donation.description}</p>
            <p className={`font-semibold ${donation.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
              Status: {donation.status}
            </p>
            <button
              className="mt-2 bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
              onClick={() => handleClaimDonation(donation.id)}
            >
              Claim Donation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDonationsPage;
