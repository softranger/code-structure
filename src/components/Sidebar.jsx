// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from "../store/sidebarSlice";
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

 const navigate = useNavigate();
 const dispatch = useDispatch();
 const openMenus = useSelector((state) => state.sidebar.openMenus);

  const toggle = (key) => {
    dispatch(toggleMenu(key));
  };

  const handleNavigation = (e, path) =>{
    e.preventDefault();
    navigate(path);
  }

  return (
    <div className="sidebar" id="sidebar">
            {/* Logo */}
            <div className="sidebar-logo">
                <a href="index.html" className="logo logo-normal">
                    <img src="../assets/img/logo.svg" alt="Logo" />
                </a>
                <a href="index.html" className="logo-small">
                    <img src="../assets/img/logo-small.svg" alt="Logo" />
                </a>
                <a href="index.html" className="dark-logo">
                    <img src="../assets/img/logo-white.svg" alt="Logo" />
                </a>
            </div>
            {/* /Logo */}
            <div className="sidebar-header p-3 pb-0">
                <div className="rounded bg-light p-2 mb-3 sidebar-profile d-flex align-items-center">
                    <div className="avatar online avatar-md onlin">
                        <img src="../assets/img/profiles/avatar-16.jpg" alt="Img" className="img-fluid rounded-circle" />
                    </div>
                    <div className="text-start sidebar-profile-info ms-2">
                        <h6 className="fs-12 fw-normal">Adrian Herman</h6>
                        <p className="fs-10">System Admin</p>
                    </div>
                </div>
                <div className="me-auto d-flex align-items-center mb-3">
                    <div className="dropdown add-dropdown me-2">
                        <a href="#" className="btn btn-md border d-inline-flex align-items-center fs-12 px-2" data-bs-toggle="dropdown">
                            <i className="ti ti-plus me-1 text-gray-5"></i>Add New
                        </a>
                        <ul className="dropdown-menu dropdown-menu-start p-2">
                            <li><a className="dropdown-item d-flex align-items-center" href="employees.html"><i className="ti ti-user me-2"></i>Employee</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="teams.html"><i className="ti ti-users-plus me-2"></i>Team</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="projects.html"><i className="ti ti-progress-check me-2"></i>Projects</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="users.html"><i className="ti ti-users me-2"></i>Users</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="manual-time.html"><i className="ti ti-clock me-2"></i>Manual Time</a></li>
                        </ul>
                    </div>
                    <span className="btn btn-md btn-time px-2 d-inline-flex align-items-center fs-12 bg-primary-100 text-primary">
                        <i className="ti ti-clock me-1"></i>15:00:45 PM
                    </span>
                </div>
                <div className="input-group input-group-flat d-inline-flex me-2 mb-3">
                    <span className="input-icon-addon">
                        <i className="ti ti-search"></i>
                      </span>
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="input-group-text">
                      	<kbd className="bg-gray-100 px-2">CTRL + / </kbd>
                    </span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    {/* Flag */}
                    <div className="nav-item dropdown has-arrow flag-nav nav-item-box me-2">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                            <img src="../assets/img/flags/us.svg" alt="Language" className="img-fluid" />
                        </a>
                        <ul className="dropdown-menu p-2">
                            <li>
                                <a href="#" className="dropdown-item">
                                    <img src="../assets/img/flags/us.svg" alt="" height="16" />English
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item">
                                    <img src="../assets/img/flags/de.svg" alt="" />German
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item">
                                    <img src="../assets/img/flags/fr.svg" alt="" />French
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item">
                                    <img src="../assets/img/flags/ae.svg" alt="" />Arabic
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* /Flag */}

                    <div className="me-2 notification_item">
                        <a href="notifications.html" className="btn btn-menubar position-relative me-1">
                            <i className="ti ti-bell-check"></i>
                        </a>
                    </div>
                    <div className="me-2">
                        <a href="profile-settings.html" className="btn btn-menubar">
                            <i className="ti ti-settings"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title"><span>Main</span></li>
                        <li>
                            <ul>
                            {/* Dashboard */}
                            <li className={`submenu ${openMenus['dashboard'] ? 'active' : ''}`}>
                                <a
                                href="#"
                                className={openMenus['dashboard'] ? 'active subdrop' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggle('dashboard');
                                }}
                                >
                                <i className="ti ti-layout-grid-add"></i>
                                <span>Dashboard</span>
                                <span className="menu-arrow"></span>
                                </a>
                                <ul style={{ display: openMenus['dashboard'] ? 'block' : 'none' }}>
                                <li><a href="/dashboard/admin">Admin Dashboard</a></li>
                                <li><a href="/dashboard/user">User Dashboard</a></li>
                                </ul>
                            </li>
                            {/* administration */}
                            <li className={`submenu ${openMenus['administartion'] ? 'active' : ''}`}>
                                    <a
                                    href="#"
                                    className={openMenus['administartion'] ? 'active subdrop' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggle('administartion');
                                    }}
                                    >
                                    <i className="ti ti-layout-list"></i>
                                    <span>Administartion</span>
                                    <span className="menu-arrow"></span>
                                    </a>
                                    <ul style={{ display: openMenus['administartion'] ? 'block' : 'none' }}>

                                    <li className={`submenu submenu-two ${openMenus['calls'] ? 'active' : ''}`}>
                                        <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggle('users');
                                        }}
                                        className={openMenus['users'] ? 'subdrop' : ''}
                                        >
                                        Users<span className="menu-arrow inside-submenu"></span>
                                        </a>
                                        <ul style={{ display: openMenus['users'] ? 'block' : 'none' }}>
                                        <li><a href="#" onClick={(e) => handleNavigation(e, '/users')}>Users</a>
                                        </li>
                                        <li><a href="#" onClick={(e)=> handleNavigation(e, '/roles')}>Roles & Permission</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            {/* Applications */}
                            {/* <li className={`submenu ${openMenus['applications'] ? 'active' : ''}`}>
                                <a
                                href="#"
                                className={openMenus['applications'] ? 'active subdrop' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggle('applications');
                                }}
                                >
                                <i className="ti ti-layout-list"></i>
                                <span>Applications</span>
                                <span className="menu-arrow"></span>
                                </a>
                                <ul style={{ display: openMenus['applications'] ? 'block' : 'none' }}>
                                <li><a href="/chat">Chat</a></li>

                                <li className={`submenu submenu-two ${openMenus['calls'] ? 'active' : ''}`}>
                                    <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggle('calls');
                                    }}
                                    className={openMenus['calls'] ? 'subdrop' : ''}
                                    >
                                    Calls<span className="menu-arrow inside-submenu"></span>
                                    </a>
                                    <ul style={{ display: openMenus['calls'] ? 'block' : 'none' }}>
                                    <li><a href="/calls/voice">Voice Call</a></li>
                                    <li><a href="/calls/video">Video Call</a></li>
                                    <li><a href="/calls/outgoing">Outgoing Call</a></li>
                                    <li><a href="/calls/incoming">Incoming Call</a></li>
                                    <li><a href="/calls/history">Call History</a></li>
                                    </ul>
                                </li>

                                <li><a href="/calendar">Calendar</a></li>
                                <li><a href="/todo">To Do</a></li>
                                </ul>
                            </li>
                            </ul>
                        </li> */}

                       
                        {/* <li className="menu-title"><span>Track</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="live-tracking.html">
                                        <i className="ti ti-chart-infographic"></i><span>Live Tracking</span><span className="track-icon"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="timesheet.html">
                                        <i className="ti ti-graph"></i><span>Timesheet</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="leave.html">
                                        <i className="ti ti-license"></i><span>Leave</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="attendance.html">
                                        <i className="ti ti-calendar"></i><span>Attendance</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="expense.html">
                                        <i className="ti ti-report-money"></i><span>Expense</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Manage</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="projects.html">
                                        <i className="ti ti-progress-check"></i><span>Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tasks.html">
                                        <i className="ti ti-subtask"></i><span>Tasks</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="screenshots.html">
                                        <i className="ti ti-photo-check"></i><span>Screenshots</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="manual-time.html">
                                        <i className="ti ti-clock-star"></i><span>Manual Time</span><span className="count">5</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="download.html">
                                        <i className="ti ti-download"></i><span>Download</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Peoples</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="employees.html">
                                        <i className="ti ti-user-bolt"></i><span>Employees</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="teams.html">
                                        <i className="ti ti-users-group"></i><span>Teams</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="clients.html">
                                        <i className="ti ti-users"></i><span>Clients</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Administration</span></li>
                        <li>
                            <ul>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-user-shield"></i><span>Users</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="users.html">Users</a></li>
                                        <li><a href="roles-permissions.html">Roles & Permissions</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="invoice.html">
                                        <i className="ti ti-files"></i><span>Invoices</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="reports.html">
                                        <i className="ti ti-file-text"></i><span>Reports</span>
                                    </a>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-settings-2"></i><span>Settings</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li className="submenu submenu-two">
                                            <a href="#">Account Settings<span className="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="profile-settings.html">Profile Settings</a></li>
                                                <li><a href="security-settings.html">Security</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="#">Company Settings<span className="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="organization-settings.html">Organization</a></li>
                                                <li><a href="locations-settings.html">Locations</a></li>
                                                <li><a href="employee-type-settings.html">Employee Type</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="#">Work Settings<span className="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="leave-types-settings.html">Leave Types</a></li>
                                                <li><a href="shift-settings.html">Shift</a></li>
                                                <li><a href="working-hours-settings.html">Working Hours</a></li>
                                                <li><a href="tracker-settings.html">Tracker Settings</a></li>
                                                <li><a href="productivity-ratings-settings.html">Productivity Ratings</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="#">Finance & Accounts<span className="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="expense-category-settings.html">Expense Category</a></li>
                                                <li><a href="expense-type-settings.html">Expense Type</a></li>
                                                <li><a href="payment-method-settings.html">Payment Method</a></li>
                                                <li><a href="currencies-settings.html">Currencies</a></li>
                                                <li><a href="taxes-settings.html">Taxes</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="#">System Settings<span className="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="localization-settings.html">Localization</a></li>
                                                <li><a href="custom-fields-settings.html">Custom Fields</a></li>
                                                <li><a href="preference-settings.html">Preference</a></li>
                                                <li><a href="appearance-settings.html">Appearance</a></li>
                                                <li><a href="notifications-settings.html">Notifications</a></li>
                                                <li><a href="integrations-settings.html">Integrations</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="plans-and-billings.html">Plans & Billings</a>
                                        </li>
                                        <li>
                                            <a href="delete-account.html">Delete Account</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Layout</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="layout-horizontal.html">
                                        <i className="ti ti-layout-navbar"></i><span>Horizontal</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="layout-detached.html">
                                        <i className="ti ti-details"></i><span>Detached</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="layout-two-column.html">
                                        <i className="ti ti-layout-kanban"></i><span>Two Column</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="layout-without-header.html">
                                        <i className="ti ti-layout-sidebar"></i><span>Without Header</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="layout-rtl.html">
                                        <i className="ti ti-text-direction-rtl"></i><span>RTL</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="layout-dark.html">
                                        <i className="ti ti-moon"></i><span>Dark</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Content</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="pages.html">
                                        <i className="ti ti-page-break"></i><span>Pages</span>
                                    </a>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-brand-blogger"></i><span>Blogs</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="blogs.html">All Blogs</a></li>
                                        <li><a href="blog-categories.html">Categories</a></li>
                                        <li><a href="blog-comments.html">Comments</a></li>
                                        <li><a href="blog-tags.html">Blog Tags</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-map-pin-bolt"></i><span>Locations</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="countries.html">Countries</a></li>
                                        <li><a href="states.html">States</a></li>
                                        <li><a href="cities.html">Cities</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="testimonials.html">
                                        <i className="ti ti-star"></i><span>Testimonials</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="faq.html">
                                        <i className="ti ti-layout-rows"></i><span>FAQ’S</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Pages</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="starter.html">
                                        <i className="ti ti-brand-pagekit"></i><span>Starter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile.html">
                                        <i className="ti ti-user-share"></i><span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="gallery.html">
                                        <i className="ti ti-photo-share"></i><span>Gallery</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="search-result.html">
                                        <i className="ti ti-search"></i><span>Search Results</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="timeline.html">
                                        <i className="ti ti-timeline-event"></i><span>Timeline</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="pricing.html">
                                        <i className="ti ti-moneybag"></i><span>Pricing</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="coming-soon.html">
                                        <i className="ti ti-lego"></i><span>Coming Soon</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="under-maintenance.html">
                                        <i className="ti ti-layout-align-bottom"></i><span>Under Maintenance</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="under-construction.html">
                                        <i className="ti ti-barrier-block"></i><span>Under Construction</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="api-keys.html">
                                        <i className="ti ti-api"></i><span>API Keys</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">
                                        <i className="ti ti-lock"></i><span>Privacy Policy</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="terms-condition.html">
                                        <i className="ti ti-filters"></i><span>Terms & Conditions</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Authentication</span></li>
                        <li>
                            <ul>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-login"></i><span>Login</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="login.html">Cover</a></li>
                                        <li><a href="login-2.html">Illustration</a></li>
                                        <li><a href="login-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-users-plus"></i><span>Register</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="register.html">Cover</a></li>
                                        <li><a href="register-2.html">Illustration</a></li>
                                        <li><a href="register-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-layers-linked"></i><span>Forgot Password</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="forgot-password.html">Cover</a></li>
                                        <li><a href="forgot-password-2.html">Illustration</a></li>
                                        <li><a href="forgot-password-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-zoom-reset"></i><span>Reset Password</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="reset-password.html">Cover</a></li>
                                        <li><a href="reset-password-2.html">Illustration</a></li>
                                        <li><a href="reset-password-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-mail-exclamation"></i><span>Email Verification</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="email-verification.html">Cover</a></li>
                                        <li><a href="email-verification-2.html">Illustration</a></li>
                                        <li><a href="email-verification-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-2fa"></i><span>2 Step Verification</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="two-step-verification.html">Cover</a></li>
                                        <li><a href="two-step-verification-2.html">Illustration</a></li>
                                        <li><a href="two-step-verification-3.html">Basic</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="lock-screen.html">
                                        <i className="ti ti-face-id-error"></i><span>Lock Screen</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="error-404.html">
                                        <i className="ti ti-error-404"></i><span>404 Error</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="error-500.html">
                                        <i className="ti ti-server"></i><span>500 Error</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>UI Interface</span></li>
                        <li>
                            <ul>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-hierarchy"></i><span>Base UI</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="ui-alerts.html">Alerts</a></li>
                                        <li><a href="ui-accordion.html">Accordion</a></li>
                                        <li><a href="ui-avatar.html">Avatar</a></li>
                                        <li><a href="ui-badges.html">Badges</a></li>
                                        <li><a href="ui-borders.html">Border</a></li>
                                        <li><a href="ui-buttons.html">Buttons</a></li>
                                        <li><a href="ui-buttons-group.html">Button Group</a></li>
                                        <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                        <li><a href="ui-cards.html">Card</a></li>
                                        <li><a href="ui-carousel.html">Carousel</a></li>
                                        <li><a href="ui-colors.html">Colors</a></li>
                                        <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                        <li><a href="ui-grid.html">Grid</a></li>
                                        <li><a href="ui-images.html">Images</a></li>
                                        <li><a href="ui-lightbox.html">Lightbox</a></li>
                                        <li><a href="ui-media.html">Media</a></li>
                                        <li><a href="ui-modals.html">Modals</a></li>
                                        <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                                        <li><a href="ui-pagination.html">Pagination</a></li>
                                        <li><a href="ui-popovers.html">Popovers</a></li>
                                        <li><a href="ui-progress.html">Progress</a></li>
                                        <li><a href="ui-placeholders.html">Placeholders</a></li>
                                        <li><a href="ui-spinner.html">Spinner</a></li>
                                        <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                                        <li><a href="ui-nav-tabs.html">Tabs</a></li>
                                        <li><a href="ui-toasts.html">Toasts</a></li>
                                        <li><a href="ui-tooltips.html">Tooltips</a></li>
                                        <li><a href="ui-typography.html">Typography</a></li>
                                        <li><a href="ui-video.html">Video</a></li>
                                        <li><a href="ui-sortable.html">Sortable</a></li>
                                        <li><a href="ui-swiperjs.html">Swiperjs</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-whirl"></i><span>Advanced UI</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="ui-ribbon.html">Ribbon</a></li>
                                        <li><a href="ui-clipboard.html">Clipboard</a></li>
                                        <li><a href="ui-drag-drop.html">Drag & Drop</a></li>
                                        <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                        <li><a href="ui-rating.html">Rating</a></li>
                                        <li><a href="ui-text-editor.html">Text Editor</a></li>
                                        <li><a href="ui-counter.html">Counter</a></li>
                                        <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                                        <li><a href="ui-stickynote.html">Sticky Note</a></li>
                                        <li><a href="ui-timeline.html">Timeline</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-forms"></i><span>Forms</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li className="submenu submenu-two">
                                            <a href="#">Form Elements<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                                                <li><a href="form-checkbox-radios.html">Checkbox & Radios</a></li>
                                                <li><a href="form-input-groups.html">Input Groups</a></li>
                                                <li><a href="form-grid-gutters.html">Grid & Gutters</a></li>
                                                <li><a href="form-select.html">Form Select</a></li>
                                                <li><a href="form-mask.html">Input Masks</a></li>
                                                <li><a href="form-fileupload.html">File Uploads</a></li>
                                                <li><a href="form-elements.html">Form Elements</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="#">Layouts<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="form-horizontal.html">Horizontal Form</a></li>
                                                <li><a href="form-vertical.html">Vertical Form</a></li>
                                                <li><a href="form-floating-labels.html">Floating Labels</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="form-validation.html">Form Validation</a></li>
                                        <li><a href="form-select2.html">Select2</a></li>
                                        <li><a href="form-wizard.html">Form Wizard</a></li>
                                        <li><a href="form-pickers.html">Form Picker</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-table"></i><span>Tables</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="tables-basic.html">Basic Tables </a></li>
                                        <li><a href="data-tables.html">Data Table </a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-chart-pie-3"></i>
                                        <span>Charts</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="chart-apex.html">Apex Charts</a></li>
                                        <li><a href="chart-c3.html">Chart C3</a></li>
                                        <li><a href="chart-js.html">Chart Js</a></li>
                                        <li><a href="chart-morris.html">Morris Charts</a></li>
                                        <li><a href="chart-flot.html">Flot Charts</a></li>
                                        <li><a href="chart-peity.html">Peity Charts</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-icons"></i>
                                        <span>Icons</span><span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                        <li><a href="icon-tabler.html">Tabler Icons</a></li>
                                        <li><a href="icon-bootstrap.html">Bootstrap Icons</a></li>
                                        <li><a href="icon-remix.html">Remix Icons</a></li>
                                        <li><a href="icon-feather.html">Feather Icons</a></li>
                                        <li><a href="icon-ionic.html">Ionic Icons</a></li>
                                        <li><a href="icon-material.html">Material Icons</a></li>
                                        <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                                        <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                                        <li><a href="icon-themify.html">Themify Icons</a></li>
                                        <li><a href="icon-weather.html">Weather Icons</a></li>
                                        <li><a href="icon-typicon.html">Typicon Icons</a></li>
                                        <li><a href="icon-flag.html">Flag Icons</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-map-2"></i>
                                        <span>Maps</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="maps-vector.html">Vector</a>
                                        </li>
                                        <li>
                                            <a href="maps-leaflet.html">Leaflet</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-title"><span>Extras</span></li>
                        <li>
                            <ul>
                                <li>
                                    <a href="#"><i className="ti ti-file-shredder"></i><span>Documentation</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti ti-exchange"></i><span>Changelog</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#">
                                        <i className="ti ti-menu-2"></i><span>Multi Level</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul>
                                        <li><a href="#">Multilevel 1</a></li>
                                        <li className="submenu submenu-two">
                                            <a href="#">Multilevel 2<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="#">Multilevel 2.1</a></li>
                                                <li className="submenu submenu-two submenu-three">
                                                    <a href="#">Multilevel 2.2<span className="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                    <ul>
                                                        <li><a href="#">Multilevel 2.2.1</a></li>
                                                        <li><a href="#">Multilevel 2.2.2</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Multilevel 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    {/* <div className="sidebar-footer">
                        <div className="trial-item bg-dark p-3 mb-4">
                            <h6 className="fw-semibold text-white mb-1">6 days left trial.</h6>
                            <p className="fs-12 text-light mb-3">Learn more about Clockfie billing works</p>
                            <a href="plans-and-billings.html" className="btn btn-sm btn-primary"><i className="ti ti-crown me-1"></i>Upgrade Now</a>
                            <a href="#" className="close-icon"><i className="ti ti-x"></i></a>
                        </div>
                        <p className="fs-13 copyright">Copyright 2025 - <a href="#" className="link-primary">Clockfie</a></p>
                    </div> */}
                </div>
            </div>
        </div>
  );
}
