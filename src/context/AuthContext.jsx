import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // You missed this

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // { _id, name, email, role, permissions }
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ You used it in logout but never imported

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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    const userData = {
      _id: data._id,
      name: data.name,
      email: data.email,
      role: data.role, // this must include permissions
    };

    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userData', JSON.stringify(userData));
    setToken(data.token);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await fetch('http://127.0.0.1:5000/api/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.error('Logout error (ignored):', err);
    }

    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setToken(null);
    setUser(null);
    navigate('/'); // redirect to login/home
  };

  // ✅ Permission check helper
const can = (permission) => {
  return user?.role?.permissions?.includes(permission);
};


  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated: !!user, can }}>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
