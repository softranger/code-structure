// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user info
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user/token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userData', JSON.stringify({ _id: data._id, name: data.name, email: data.email }));
    setToken(data.token);
    setUser({ _id: data._id, name: data.name, email: data.email });
  };

  const logout = async () => {
    try {
      // Optional: call your Node.js logout API to invalidate token
      await fetch('http://127.0.0.1:5000/api/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // if backend uses token-based logout
        },
      });
    } catch (err) {
      console.error('Logout error (ignored):', err);
    }

    // Clear local data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setToken(null);
    setUser(null);

    // Navigate to login
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth
export const useAuth = () => useContext(AuthContext);
