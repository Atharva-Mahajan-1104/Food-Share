import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';
import { DonationOffer } from '../../types';
import { Link } from 'react-router-dom';

interface DonationCardProps {
  donation: DonationOffer;
}

const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {donation.imageUrl && (
        <img
          src={donation.imageUrl}
          alt={donation.eventName}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{donation.eventName}</h3>
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{donation.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Available until: {new Date(donation.availableUntil).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">Serves {donation.quantity} people</span>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to={`/dashboard/donations/${donation.id}`}
            className="btn btn-primary w-full justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationCard;