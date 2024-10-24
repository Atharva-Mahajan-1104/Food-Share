import React from 'react';
import { useAuth } from '../../context/AuthContext';
import DonationForm from '../../components/dashboard/DonationForm';
import DonationCard from '../../components/dashboard/DonationCard';
import { DonationOffer } from '../../types';

const mockDonations: DonationOffer[] = [
  {
    id: '1',
    eventName: 'Charity Dinner',
    organizerId: 'org123',
    location: 'New York',
    quantity: 100,
    availableUntil: '2024-12-31',
    description: 'Leftover food from the charity dinner event.',
    imageUrl: 'https://example.com/image1.jpg',
    status: 'available', // Correct type
  },
  {
    id: '2',
    eventName: 'Community Feast',
    organizerId: 'org456',
    location: 'San Francisco',
    quantity: 50,
    availableUntil: '2024-11-15',
    description: 'Excess food from the community gathering.',
    imageUrl: 'https://example.com/image2.jpg',
    status: 'completed', // Correct type
  }
];


const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const isOrganizer = user?.role === 'organizer';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      {isOrganizer ? (
        <DonationForm />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDonations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;