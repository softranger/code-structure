export default function UserList() {

  return (
        <div>
                           <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 table-header mb-3">
                    <div>
                        <div id="reportrange" className="reportrange-picker d-flex align-items-center">
                            <i className="ti ti-calendar text-gray-5 fs-14 me-1"></i><span className="reportrange-picker-field"></span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <div className="table-search">
                            <div className="search-input">
                                <a href="#" className="btn-searchset"><i className="ti ti-search fs-14"></i></a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i className="ti ti-filter text-gray-5 me-1"></i>Filters
                            </a>
                            <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown" id="filter-dropdown">
                                <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                                    <h4>Filter</h4>
                                    <div className="d-flex align-items-center">
                                        <a href="#" className="link-danger text-decoration-underline me-3">Clear All</a>
                                        <a href="#" className="text-decoration-underline">Save View</a>
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="filter-body pb-1">
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="form-label">Employee</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1">Shaun Farley</option>
                                                <option value="m-2">Jenny Ellis</option>
                                                <option value="m-2">Leon Baxter</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="form-label">Level</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1">User</option>
                                                <option value="m-2">Manager</option>
                                                <option value="m-3">Educational Platform</option>
                                                <option value="m-4">Chat & Call Mobile App</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="form-label">Status</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1">Active</option>
                                                <option value="m-2">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                                        <a href="#" className="btn btn-light btn-md me-2" id="close-filter">Close</a>
                                        <button type="submit" className="btn btn-primary btn-md">Filter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ti ti-sort-descending-2 me-1 text-gray-5"></i>Sort By : <span className="ms-1">Newest</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Newest</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Oldest</a>
                                </li>
                            </ul>
                        </div>
                        <span className="text-gray-1">|</span>
                        <a href="#" className="btn btn-icon btn-white btn-md d-flex align-items-center justify-content-center"><i className="ti ti-download"></i></a>
                        <a href="#" className="btn btn-icon btn-white btn-md d-flex align-items-center justify-content-center"><i className="ti ti-columns"></i></a>
                    </div>
                </div>

                 {/* Table List  */}
                <div className="table-responsive">
                    <table className="table datatable">
                        <thead className="thead-light">
                            <tr>
                                <th className="no-sort">NAME</th>
                                <th className="no-sort">LAST PUNCH IN</th>
                                <th className="no-sort">LEVEL</th>
                                <th className="no-sort">SCREENSHOT</th>
                                <th className="no-sort">MANUAL TIME</th>
                                <th className="no-sort">PERMANENT TASKE</th>
                                <th className="no-sort">STATUS</th>
                                <th className="no-sort"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href="employee-details.html" className="avatar online avatar-rounded">
                                            <img src="assets/img/users/user-01.jpg" className="img-fluid" alt="img" />
                                        </a>
                                        <div className="ms-2">
                                            <h6 className="fw-medium mb-1"><a href="employee-details.html">Shaun Farley</a></h6>
                                        </div>
                                    </div>
                                </td>
                                <td>11 May 2025, 12:00 PM</td>
                                <td>
                                    <div className="dropdown">
                                        <a href="#" className="btn btn-md btn-white d-inline-flex align-items-center emp-name" data-bs-toggle="dropdown" aria-expanded="false">
                                            User<i className="ti ti-chevron-down ms-2"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1 d-flex align-items-center">	
                                                    Manager
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1 d-flex align-items-center">	
                                                    Admin
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-sm bg-success fs-10"><i className="ti ti-point-filled"></i> Active</span>
                                </td>
                                <td className="action-item">
                                    <a className="action-set dot-settings" href="#" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i className="ti ti-dots-vertical" aria-hidden="true"></i>
                                    </a>
                                    <ul className="dropdown-menu p-2 rounded-2">
                                        <li>
                                            <a href="edit-user.html" className="dropdown-item rounded-2"><i className="ti ti-edit me-2"></i>Edit User</a>
                                        </li>
                                        <li>
                                            <a href="reset-password.html" className="dropdown-item rounded-2"><i className="ti ti-lock me-2"></i>Reset Password</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-2"><i className="ti ti-ban me-2"></i>Suspend User</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-2 text-danger"><i className="ti ti-trash text-danger me-2"></i>Remove User</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* /Table List  */}
        </div>
  );
}