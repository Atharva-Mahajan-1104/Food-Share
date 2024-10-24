import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Organizer' | 'Shelter/NGO'>('Organizer');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock JWT token storage
    const mockToken = 'mockedJWTToken';
    const mockUserData = {
      id: '1',
      name: 'John Doe',
      email,
      // Explicitly set the role based on the selected role
      role: role === 'Organizer' ? 'organizer' : 'shelter' as 'organizer' | 'shelter', 
    };

    // Call the login function from Auth context
    login(mockUserData, mockToken);

    // Redirect based on user role
    if (mockUserData.role === 'shelter') {
      navigate('/dashboard/shelter-overview'); // Redirect to shelter overview
    } else {
      navigate('/dashboard'); // Redirect to organizer dashboard
    }
  };

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'Organizer' ? 'Shelter/NGO' : 'Organizer'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {['Organizer', 'Shelter/NGO'].map((roleName) => (
              <button
                key={roleName}
                type="button"
                className={`flex-1 py-3 mx-1 rounded-lg transition duration-200 ease-in-out ${
                  role === roleName ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={toggleRole}
              >
                {roleName}
              </button>
            ))}
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                required
                className="input border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-emerald-600 text-white py-3 rounded-md shadow-lg hover:bg-emerald-700 transition duration-200"
            >
              Sign In
            </button>
          </div>
          <div className="text-sm text-center">
            <Link to="/signup" className="text-emerald-600 hover:text-emerald-500">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
