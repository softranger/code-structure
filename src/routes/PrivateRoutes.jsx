// src/routes/PrivateRoutes.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminLayout from '../layouts/AdminLayout';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return isAuthenticated ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;
