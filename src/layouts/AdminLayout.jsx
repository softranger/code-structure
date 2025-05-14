// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminLayout() {
  return (
    <div className="main-wrapper">
      {/* Header at top */}
      <Header />

      <div className="page-wrapper d-flex">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Page Content Wrapper */}
        <div className="content-wrapper flex-grow-1 p-4">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
