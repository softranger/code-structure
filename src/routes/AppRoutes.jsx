// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import UsersTabsLayout from '../pages/users/UsersTabsLayout';
import UsersList from '../pages/users/UsersList';
import ArchivedUsers from '../pages/users/ArchivedUsers';
import InviteStatus from '../pages/users/InviteStatus';
import UserCreate from '../pages/users/UserCreate';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Private routes (with Admin Layout) */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
         {/* 👇 Nested Routes for Users Section */}
          <Route path="/users" element={<UsersTabsLayout />}>
            <Route index element={<UsersList />} /> {/* /users */}
            <Route path="archived" element={<ArchivedUsers />} /> {/* /users/archived */}
            <Route path="invite-status" element={<InviteStatus />} /> {/* /users/invite-status */}
          </Route>
          <Route path="/users/user-create" element={<UserCreate />} /> {/* /users/invite-status */}
          <Route path="/users/edit-user/:id" element={<UserCreate />} />

        {/* Add more protected routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
