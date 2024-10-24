import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/SignupPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AboutPage from './pages/about/AboutPage';
import DonationsPage from './components/dashboard/Donations'; // Donations Page for shelters
import PostDonation from './components/dashboard/PostDonation'; // Post Donation Page
import PastDonations from './components/dashboard/PastDonations'; // Past Donations for organizers
import Profile from './components/dashboard/Profile'; // Profile Page
import Overview from './components/dashboard/Overview'; // Organizer Overview
import ShelterOverview from './components/dashboard/ShelterOverview'; // Shelter Overview
import ViewDonationsPage from './components/dashboard/ViewDonationsPage'; // View Donations Page for Shelters
import ViewPastDonationsPage from './components/dashboard/ViewPastDonationsPage'; // View Past Donations Page for Shelters
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route 
                index 
                element={<ProtectedRoute><Overview /></ProtectedRoute>} 
              /> {/* Default route for the dashboard */}
              
              <Route 
                path="overview" 
                element={<ProtectedRoute role="organizer"><Overview /></ProtectedRoute>} 
              /> {/* Organizer Overview */}
              
              <Route 
                path="shelter-overview" 
                element={<ProtectedRoute role="shelter"><ShelterOverview /></ProtectedRoute>} 
              /> {/* Shelter Overview */}
              
              <Route 
                path="post-donation" 
                element={<ProtectedRoute role="organizer"><PostDonation /></ProtectedRoute>} 
              /> {/* Post Donation */}
              
              <Route 
                path="donations" 
                element={<ProtectedRoute role="shelter"><DonationsPage /></ProtectedRoute>} 
              /> {/* Donations Page for Shelters */}
              
              <Route 
                path="view-donations" 
                element={<ProtectedRoute role="shelter"><ViewDonationsPage /></ProtectedRoute>} 
              /> {/* View Donations Page for Shelters */}
              
              <Route 
                path="past-donations" 
                element={<ProtectedRoute role="organizer"><PastDonations /></ProtectedRoute>} 
              /> {/* Past Donations for Organizers */}
              
              <Route 
                path="view-past-donations" 
                element={<ProtectedRoute role="shelter"><ViewPastDonationsPage /></ProtectedRoute>} 
              /> {/* View Past Donations Page for Shelters */}
              
              <Route 
                path="profile" 
                element={<ProtectedRoute><Profile /></ProtectedRoute>} 
              /> {/* Profile Page */}
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
