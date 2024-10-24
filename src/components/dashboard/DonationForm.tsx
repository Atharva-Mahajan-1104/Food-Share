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
      // Handle form submission
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Donation Offer</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="eventName" className="label">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              {...register('eventName', { required: 'Event name is required' })}
              className="input"
            />
            {errors.eventName && (
              <p className="mt-1 text-sm text-red-600">{errors.eventName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="label">
              Location
            </label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              className="input"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="label">
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
            />
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="availableUntil" className="label">
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
          </div>

          <div>
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              {...register('description', { required: 'Description is required' })}
              className="input"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="label">
              Event Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register('image')}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              Create Donation Offer
            </button>
          </div>
        </form>
      </motion.div>
    );
  };

  export default DonationForm;