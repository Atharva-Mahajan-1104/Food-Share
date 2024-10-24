import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Organizer'); // Default role

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here (e.g., form validation)
    console.log({ name, email, password, role });
    // You can also implement API call here for signup
  };

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'Organizer' ? 'Shelter/NGO' : 'Organizer'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            <button
              type="button"
              className={`flex-1 py-2 mx-1 rounded-lg transition duration-200 ease-in-out ${role === 'Organizer' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-200 text-gray-700'}`}
              onClick={toggleRole}
            >
              Event Organizer
            </button>
            <button
              type="button"
              className={`flex-1 py-2 mx-1 rounded-lg transition duration-200 ease-in-out ${role === 'Shelter/NGO' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-200 text-gray-700'}`}
              onClick={toggleRole}
            >
              Shelter/NGO
            </button>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Full Name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="input border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="input border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-emerald-600 text-white py-2 rounded-md shadow-md hover:bg-emerald-700 transition duration-200"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center">
            <Link to="/login" className="text-emerald-600 hover:text-emerald-500">
              Already have an account? Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
