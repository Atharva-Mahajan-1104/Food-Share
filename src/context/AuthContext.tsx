import React, { createContext, useContext, useState, useEffect } from 'react';

// User type definition with additional 'shelter' role
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'organizer' | 'ngo' | 'shelter'; // Include 'shelter' role
}

// Auth state definition
export interface AuthState {
  user: User | null; // Current user or null if not logged in
  token: string | null; // Authentication token
  isAuthenticated: boolean; // True if the user is authenticated
  login: (userData: User, token: string) => void; // Function to log in
  logout: () => void; // Function to log out
}

// Create the Auth context
const AuthContext = createContext<AuthState | undefined>(undefined);

// Provider component for Auth context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Check if the user is authenticated based on user state
  const isAuthenticated = Boolean(user);

  // Login function to set user data and token
  const login = (userData: User, token: string) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token);
  };

  // Logout function to clear user data and token
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  // Optionally restore user state from local storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      // Here, you could fetch user data based on the token if needed
      // Example: make an API call to get the user details
      // For demonstration, let's assume the user data is hardcoded
      // In a real application, you would replace this with an API call
      const storedUser = {
        id: '1', // Replace with actual data retrieval
        name: 'John Doe', // Replace with actual data retrieval
        email: 'john.doe@example.com', // Replace with actual data retrieval
        role: 'shelter', // This should reflect the actual role of the user
      } as User;
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
