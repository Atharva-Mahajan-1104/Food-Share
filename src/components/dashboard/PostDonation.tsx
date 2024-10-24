import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface DonationFormData {
  eventName: string;
  location: string;
  quantity: number;
  availableUntil: string;
  description: string;
  image?: FileList;
}

const DonationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonationFormData>();

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Create Donation Offer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Event Name */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-2">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            {...register('eventName', { required: 'Event name is required' })}
            className="input"
            placeholder="Enter event name"
          />
          {errors.eventName && (
            <p className="mt-1 text-sm text-red-600">{errors.eventName.message}</p>
          )}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register('location', { required: 'Location is required' })}
            className="input"
            placeholder="Enter location"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </motion.div>

        {/* Quantity */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Servings
          </label>
          <input
            type="number"
            id="quantity"
            {...register('quantity', {
              required: 'Quantity is required',
              min: { value: 1, message: 'Quantity must be at least 1' },
            })}
            className="input"
            placeholder="Enter number of servings"
          />
          {errors.quantity && (
            <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
          )}
        </motion.div>

        {/* Available Until */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="availableUntil" className="block text-sm font-semibold text-gray-700 mb-2">
            Available Until
          </label>
          <input
            type="datetime-local"
            id="availableUntil"
            {...register('availableUntil', { required: 'Available until is required' })}
            className="input"
          />
          {errors.availableUntil && (
            <p className="mt-1 text-sm text-red-600">{errors.availableUntil.message}</p>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description', { required: 'Description is required' })}
            className="input"
            placeholder="Enter a brief description"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </motion.div>

        {/* Event Image */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
            Event Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image')}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="submit"
            className="btn btn-primary w-full py-3 font-semibold text-lg text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
          >
            Create Donation Offer
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default DonationForm;
