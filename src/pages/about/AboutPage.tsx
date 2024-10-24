import React from 'react';
import { motion } from 'framer-motion';
import testimonialImage1 from '../../assets/kimson-doan-HD8KlyWRYYM-unsplash.jpg';
import testimonialImage2 from '../../assets/pavel-kosov-nLNguQNxLAE-unsplash.jpg';
const AboutPage: React.FC = () => {
  const features = [
    { title: 'Easy to Use', description: 'Our platform is user-friendly, making it simple for event organizers and NGOs to connect.', icon: '😄' },
    { title: 'Real-time Notifications', description: 'Get instant updates about food donation requests and offers.', icon: '📲' },
    { title: 'Community Focused', description: 'Join a network of caring individuals and organizations dedicated to reducing food waste.', icon: '🤝' },
    { title: 'Secure and Reliable', description: 'Your information is safe with us, ensuring a trustworthy experience.', icon: '🔒' },
  ];

  const testimonials = [
    { name: 'Jane Doe', feedback: 'This platform has transformed our food donation process! It’s so easy to use.', image: testimonialImage1 },
    { name: 'John Smith', feedback: 'We’ve connected with several organizations and have been able to donate more food than ever before!', image: testimonialImage2 },
  ];

  const statistics = [
    { value: '1.3 billion tons', description: 'Food wasted globally each year' },
    { value: '1 in 9', description: 'People suffer from hunger' },
    { value: '40%', description: 'Food waste occurs at the consumer level' },
    { value: '28% of agricultural land', description: 'Used to produce food that is never eaten' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      {/* Header Section */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-gray-900 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover Our Product
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-700 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We provide a seamless platform that connects event organizers with shelters and NGOs, ensuring food donations reach those in need efficiently and effectively.
      </motion.p>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Section */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Users Say
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
            />
            <p className="italic text-gray-600 mb-2">"{testimonial.feedback}"</p>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics Section */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Food Waste Statistics
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Button */}
      <motion.button
        className="mt-10 bg-emerald-600 text-white px-8 py-4 rounded-md shadow-md transition duration-200 hover:bg-emerald-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Join Our Community
      </motion.button>
    </div>
  );
};

export default AboutPage;
