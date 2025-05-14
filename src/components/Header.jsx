// src/components/Header.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setMobileSidebar, toggleMiniSidebar  } from '/src/store/sidebarSlice';  // Make sure this import is correct
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { logout, user } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // stop default <a> behavior
    logout(); // call logout from context
  };


const dispatch = useDispatch();
const mobileSidebar = useSelector((state) => state.sidebar.mobileSidebar);

  // Toggle mobile sidebar
const toggleMobileSidebar = () => {
  dispatch(setMobileSidebar(!mobileSidebar));
};

  const handleToggle = () => {
    // alert("fdd");
    dispatch(toggleMiniSidebar()); // ✅ This toggles miniSidebar in Redux
  };

  return (
        <div className="main-wrapper">
           {/* Header */}
        <div className="header">
            <div className="main-header">

                <div className="header-left">
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo.svg" alt="Logo" />
                    </a>
                    <a href="index.html" className="dark-logo">
                        <img src="assets/img/logo-white.svg" alt="Logo" />
                    </a>
                </div>
                <button
                    id="mobile_btn"
                    className="mobile_btn"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleMobileSidebar(); // <- Redux-based toggle
                    }}
                    >
                    <span className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </button> 




                <div className="header-user">
                    <div className="nav user-menu nav-list">
                        <div className="me-auto d-flex align-items-center" id="header-search">
                            <button
                                    id="toggle_btn"
                                    className="toggle_btn"
                                    href="#"
                                   onClick={handleToggle}
                                >
                                <i className="ti ti-chevron-left"></i>
                            </button>
                            <div className="dropdown add-dropdown me-3">
                                <a href="#" className="btn btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                    <i className="ti ti-plus me-1"></i>Add New
                                </a>
                                <ul className="dropdown-menu dropdown-menu-start p-2">
                                    <li><a className="dropdown-item d-flex align-items-center" href="employees.html"><i className="ti ti-user me-2"></i>Employee</a></li>
                                    <li><a className="dropdown-item d-flex align-items-center" href="teams.html"><i className="ti ti-users-plus me-2"></i>Team</a></li>
                                    <li><a className="dropdown-item d-flex align-items-center" href="projects.html"><i className="ti ti-progress-check me-2"></i>Projects</a></li>
                                    <li><a className="dropdown-item d-flex align-items-center" href="users.html"><i className="ti ti-users me-2"></i>Users</a></li>
                                    <li><a className="dropdown-item d-flex align-items-center" href="manual-time.html"><i className="ti ti-clock me-2"></i>Manual Time</a></li>
                                </ul>
                            </div>
                            <span className="badge badge-md bg-soft-primary badge-time d-inline-flex align-items-center">
								<i className="ti ti-clock me-1"></i>15:00:45 PM
							</span>
                        </div>

                        <div className="d-flex align-items-center">

                            {/* Search */}
                            <div className="input-group input-group-flat d-inline-flex me-2">
                                <span className="input-icon-addon">
									<i className="ti ti-search"></i>
								  </span>
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-text">
								  <kbd className="bg-gray-100 px-2">CTRL + / </kbd>
								</span>
                            </div>
                            {/* /Search */}

                            {/* Flag */}
                            <div className="nav-item dropdown has-arrow flag-nav nav-item-box me-2">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                                    <img src="assets/img/flags/us.svg" alt="Language" className="img-fluid" />
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            <img src="assets/img/flags/us.svg" alt="" height="16" />English
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            <img src="assets/img/flags/de.svg" alt="" />German 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            <img src="assets/img/flags/fr.svg" alt="" />French
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            <img src="assets/img/flags/ae.svg" alt="" />Arabic
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /Flag */}

                            <div className="me-2 nav-item  dropdown theme-item">
                                <a className="btn btn-menubar" data-bs-toggle="dropdown" href="#" role="button">
                                    <i className="ti ti-sun-high"></i>
                                </a>
                                <ul className="dropdown-menu p-2">
                                    <li className="mb-1">
                                        <a href="#" className="dropdown-item d-inline-flex align-items-center active theme-toggle" id="light-mode-toggle">
                                            <i className="ti ti-sun-high me-2"></i>Light
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item d-inline-flex align-items-center theme-toggle" id="dark-mode-toggle">
                                            <i className="ti ti-moon me-2"></i>Dark
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="me-2 notification_item">
                                <a href="#" className="btn btn-menubar position-relative me-1" id="notification_popup" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <i className="ti ti-bell-check"></i>
                                    <span className="position-absolute badge bg-danger"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end notification-dropdown">
                                    <div className="topnav-dropdown-header pb-0">
                                        <h5 className="notification-title">Notifications</h5>
                                        <ul className="nav nav-tabs nav-tabs-bottom">
                                            <li className="nav-item"><a className="nav-link active" href="#active-notification" data-bs-toggle="tab">Active<span className="count ms-2">2</span></a></li>
                                            <li className="nav-item"><a className="nav-link" href="#unread-notification" data-bs-toggle="tab">Unread</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#archieve-notification" data-bs-toggle="tab">Archive</a></li>
                                        </ul>
                                    </div>
                                    <div className="noti-content">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="active-notification">
                                                <div className="notification-nodata">
                                                    <img src="assets/img/icons/notify-nodata.svg" alt="img" />
                                                    <p className="fw-medium">No New Nofitications</p>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-02.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Jerry Manas</span> Added New Task Creating <span className="h6">Login Pages</span></a></p>
                                                            <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>4 Min Ago</span>
                                                        </div>
                                                    </div>
                                                    <span className="bg-danger badge p-0 d-inline-block badge-status"></span>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-05.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Robert Fox </span> Was Marked as Late Login <span className="text-danger">09:55 AM</span></a></p>
                                                            <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>5 Min Ago</span>
                                                        </div>
                                                    </div>
                                                    <span className="bg-danger badge p-0 d-inline-block badge-status"></span>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-04.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Jenny Wilson </span> Completed <span className="h6">Created New Component</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>15 Min Ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-02.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Jacob Johnson </span> Added Manual Time <span className="h6">2 Hrs</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>20 Min Ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-01.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Annete Black </span> Completed <span className="h6">Improved Workflow React</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>22 Min Ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="unread-notification">
                                                <div className="notification-list">
                                                    <a href="notifications.html">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-lg me-2 flex-shrink-0">
																<img src="assets/img/profiles/avatar-02.jpg" alt="Profile" className="rounded-circle" />
															</span>
                                                            <div className="flex-grow-1">
                                                                <p className="mb-1"><span className="h6">Jerry Manas</span> Added New Task Creating <span className="h6">Login Pages</span></p>
                                                                <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>4 Min Ago</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <span className="bg-danger badge p-0 d-inline-block badge-status"></span>
                                                </div>
                                                <div className="notification-list">
                                                    <a href="notifications.html">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-lg me-2 flex-shrink-0">
																<img src="assets/img/profiles/avatar-05.jpg" alt="Profile" className="rounded-circle" />
															</span>
                                                            <div className="flex-grow-1">
                                                                <p className="mb-1"><span className="h6">Robert Fox </span> Was Marked as Late Login <span className="text-danger">09:55 AM</span></p>
                                                                <span className="fs-12 noti-time"><i className="ti ti-clock me-1"></i>5 Min Ago</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <span className="bg-danger badge p-0 d-inline-block badge-status"></span>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="archieve-notification">
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-04.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Jenny Wilson </span> Completed <span className="h6">Created New Component</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time pe-2 me-2 border-end"><i className="ti ti-clock me-1"></i>15 Min Ago</span>
                                                                <a href="#" className="link-primary fa-12 fw-medium">Restore</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-02.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Jacob Johnson </span> Added Manual Time <span className="h6">2 Hrs</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time pe-2 me-2 border-end"><i className="ti ti-clock me-1"></i>20 Min Ago</span>
                                                                <a href="#" className="link-primary fa-12 fw-medium">Restore</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="notifications.html" className="avatar avatar-lg me-2 flex-shrink-0">
                                                            <img src="assets/img/profiles/avatar-01.jpg" alt="Profile" className="rounded-circle" />
                                                        </a>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-1"><a href="notifications.html"><span className="h6">Annete Black </span> Completed <span className="h6">Improved Workflow React</span></a></p>
                                                            <div className="d-flex align-items-center">
                                                                <span className="fs-12 noti-time pe-2 me-2 border-end"><i className="ti ti-clock me-1"></i>22 Min Ago</span>
                                                                <a href="#" className="link-primary fa-12 fw-medium">Restore</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between topnav-dropdown-footer">
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="link-primary text-decoration-underline me-3">Mark all as Read</a>
                                            <a href="#" className="link-danger text-decoration-underline">Clear All</a>
                                        </div>
                                        <a href="notifications.html" className="btn btn-primary btn-sm d-inline-flex align-items-center">View All Notifications<i className="ti ti-chevron-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="me-2">
                                <a href="profile-settings.html" className="btn btn-menubar">
                                    <i className="ti ti-settings"></i>
                                </a>
                            </div>
                            <div className="dropdown profile-dropdown">
                                <a href="#" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <span className="avatar avatar-md">
										<img src="assets/img/profiles/avatar-01.jpg" alt="Img" className="img-fluid rounded-circle" />
									</span>
                                </a>
                                <div className="dropdown-menu p-2">
                                    <div className="profileset d-flex align-items-center bg-dark p-3 mb-2">
                                        <span className="user-img me-2">
											<img src="assets/img/profiles/avatar-01.jpg" alt="" />
										</span>
                                        <div>
                                            <h6 className="text-white mb-1">{user?.name}</h6>
                                            <p className="fs-13 text-light">Manager</p>
                                        </div>
                                    </div>
                                    <a className="dropdown-item d-flex align-items-center" href="profile.html">
                                        <i className="ti ti-user me-2"></i>Profile Settings
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="reports.html">
                                        <i className="ti ti-file-text me-2"></i>Reports
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="profile-settings.html">
                                        <i className="ti ti-settings-2 me-2"></i>Settings
                                    </a>
                                    <div className="py-2 px-3">
                                        <h6 className="mb-2">Switch Account</h6>
                                        <a href="javascript:void(0)" className="btn btn-success btn-sm w-100">
                                            <i className="ti ti-switch-horizontal text-white me-1"></i>Swith to Manager
                                        </a>
                                    </div>
                                    <a href="#" className="dropdown-item logout d-flex align-items-center" onClick={handleLogout}>
                                        <i className="ti ti-logout me-2"></i>Signout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
        {/* /Header */}
        </div>
  );
}


