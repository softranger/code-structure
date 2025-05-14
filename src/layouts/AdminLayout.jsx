// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function AdminLayout() 
{
    const miniSidebar = useSelector((state) => state.sidebar.miniSidebar);

    const mobileSidebar = useSelector((state) => state.sidebar.mobileSidebar);

  // Apply or remove `mini-sidebar` class
  useEffect(() => {
    if (miniSidebar) {
      document.body.classList.add('mini-sidebar');
    } else {
      document.body.classList.remove('mini-sidebar');
    }
  }, [miniSidebar]);

  // Apply or remove `slide-nav` for mobile sidebar
  useEffect(() => {
    if (mobileSidebar) {
      document.body.classList.add('slide-nav');
    } else {
      document.body.classList.remove('slide-nav');
    }
  }, [mobileSidebar]);

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
