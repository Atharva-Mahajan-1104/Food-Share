import React from 'react';
import { Heart, Utensils, Users } from 'lucide-react';
import HeroContent from './HeroContent';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Heart,
    title: 'Make a Difference',
    description: 'Help reduce food waste while supporting those in need in your community.',
  },
  {
    icon: Utensils,
    title: 'Easy Donations',
    description: 'Simple process to post and claim food donations from events and restaurants.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Connect with local organizations and make a real impact in your area.',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 pt-10 pb-8 md:pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8">
            <HeroContent />
            
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
              <img
                className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Food donation"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;