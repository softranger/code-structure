import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UsersTabsLayout() {

    const navigate = useNavigate();

    const handleNavigation = (e, path) =>{
        e.preventDefault();
        navigate(path);
    }


  return (
    <div>
      {/* Tabs */}
                 {/* Breadcrumb  */}
                <div className="mb-4 d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <div>
                        <h4 className="mb-1 fw-bold">Users</h4>
                        <nav>
                            <ol className="breadcrumb breadcrumb-dot mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Users</li>
                            </ol>
                        </nav>
                    </div>
                    <a href="#" onClick={(e) => handleNavigation(e, '/users/user-create')}  className="btn btn-md btn-dark"><i className="ti ti-plus me-1"></i>Invite Users</a>
                </div>
                 {/* /Breadcrumb  */}

                <div>
                    <div className="contact-grids-tab">
                    {/* Tabs */}
                        <ul className="nav nav-tabs tab-style-project d-inline-flex d-block">
                            <li className="nav-item">
                            <NavLink to="/users" end className="nav-link d-flex align-items-center">
                                <i className="ti ti-users fs-13 me-1"></i> Users List
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/users/archived" className="nav-link d-flex align-items-center">
                                <i className="ti ti-user-x fs-13 me-1"></i> Archived
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/users/invite-status" className="nav-link d-flex align-items-center">
                                <i className="ti ti-user-star fs-13 me-1"></i> Invite Status
                            </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            {/* Render the nested route's component */}
            <div className="mt-3">
                <Outlet />
            </div>
            </div>
  );
}
