import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { LayoutDashboard, Package, UserCircle, Settings } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Define navigation items based on user role
  const navigationItems = user?.role === 'organizer'
    ? [
        { name: 'Overview', icon: LayoutDashboard, path: '/dashboard/overview' },
        { name: 'Post Donation', icon: Package, path: '/dashboard/post-donation' },
        { name: 'View Past Donations', icon: UserCircle, path: '/dashboard/past-donations' },
        { name: 'Profile', icon: Settings, path: '/dashboard/profile' },
      ]
    : user?.role === 'shelter'
    ? [
        { name: 'Overview', icon: LayoutDashboard, path: '/dashboard/shelter-overview' },
        { name: 'View Donations', icon: Package, path: '/dashboard/donations' },
        { name: 'View Past Donations', icon: UserCircle, path: '/dashboard/view-past-donations' },
        { name: 'Profile', icon: Settings, path: '/dashboard/profile' },
      ]
    : []; // Default case when user role is not recognized

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"
        >
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link to="/" className="text-lg font-bold hover:underline">Dashboard</Link>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? 'bg-emerald-100 text-emerald-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive ? 'text-emerald-600' : 'text-gray-400'
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Outlet />
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
