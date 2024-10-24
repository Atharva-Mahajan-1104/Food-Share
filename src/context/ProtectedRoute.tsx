import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: 'organizer' | 'ngo' | 'shelter'; // Make sure all roles are included
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  // Check role for specific access
  if (role && user?.role !== role) {
    return <Navigate to="/" />; // Redirect if user doesn't have the right role
  }

  return <>{children}</>; // Render children if authenticated and has correct role
};

export default ProtectedRoute;
