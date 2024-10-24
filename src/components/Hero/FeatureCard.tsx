import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full"
    >
      <div className="p-3 bg-emerald-100 rounded-full">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-center">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;