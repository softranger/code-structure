import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserCreate() {
    const navigate = useNavigate();

    const handleNavigation = (e, path) =>{
        e.preventDefault();
        navigate(path);
    }

  return (
        <div>
               <div className="row justify-content-center">
                    <div className="col-md-10">
                        {/* <!-- Breadcrumb --> */}
                        <div className="mb-4">
                            <a href="#" onClick={(e) => handleNavigation(e, '/users')}  className="text-gray-9"><i className="ti ti-arrow-left me-1"></i>Back to Users List</a>
                        </div>
                        {/* <!-- /Breadcrumb --> */}

                        <div className="card">
                            <div className="card-header">
                                <h5 className="fw-bold">Create User</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs tab-style-project d-inline-flex d-block" role="tablist">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center active" data-bs-toggle="tab" data-bs-target="#basic-information">Basic Information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#employee-details">Employee Details</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#work-limits">Work Limits</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#reports">Reports</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#additional-information">Additional Settings</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
								
									{/* <!-- Basic Info --> */}
                                    <div className="tab-pane fade show active" id="basic-information" role="tabpanel">
                                        <p className="text-gray-9 fw-medium mb-3">Basic information</p>
                                        <form action="users.html">
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Name <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                User ID <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Email Address <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <div className="input-blocks">
                                                                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                                <input className="form-control" id="phone3" name="phone" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Onboarding Date <span className="text-danger">*</span></label>
                                                            <div className="input-groupicon calender-input">
                                                                <i className="ti ti-calendar text-gray-9"></i>
                                                                <input type="text" className="datetimepicker form-control" placeholder="dd/mm/yyyy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Date of Birth <span className="text-danger">*</span></label>
                                                            <div className="input-groupicon calender-input ">
                                                                <i className="ti ti-calendar text-gray-9"></i>
                                                                <input type="text" className="datetimepicker form-control" placeholder="dd/mm/yyyy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom mb-3">
                                                <p className="text-gray-9 fw-medium mb-3">Address Info</p>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Address
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Country
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>United States</option>
                                                                <option>Canada</option>
                                                                <option>United Kingdom</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                States
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>California</option>
                                                                <option>New York</option>
                                                                <option>Texas</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                City
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Postal Code
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a href="#" className="btn btn-light btn-md me-2">Cancel</a>
                                                <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Basic Info --> */}
									
									{/* <!-- Employee Details --> */}
                                    <div className="tab-pane fade" id="employee-details" role="tabpanel">
                                        <form action="users.html">
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Employment Type <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>Administrator</option>
                                                                <option>Consultant</option>
                                                                <option>Contractor</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Inoffice / Remote <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>In Office</option>
                                                                <option>Remote</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Member of Team <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>UI / UX Team</option>
                                                                <option>HTML Team</option>
                                                                <option>React Team</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Role <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>HR Assistant</option>
                                                                <option>PHP Developer</option>
                                                                <option>UI/UX Designer</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                                <label className="fw-medium text-gray-9">Projects</label>
                                                                <a href="#" className="text-primary text-decoration-underline">Add New</a>
                                                            </div>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>Office Management</option>
                                                                <option>Clinic Management</option>
                                                                <option>Chat & Call Mobile App</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Comments</label>
                                                            <textarea className="form-control" rows="2"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a href="#" className="btn btn-light btn-md me-2">Cancel</a>
                                                <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Employee Details --> */}
									
									{/* <!-- Work Limits --> */}
                                    <div className="tab-pane fade" id="work-limits" role="tabpanel">
                                        <form action="users.html">
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Work Days <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="d-flex flex-wrap gap-2" role="group" aria-label="Basic checkbox toggle button group">
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck1" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck1">Mon</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck2" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck2">Tue</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck3" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck3">Wed</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck4" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck4">Thu</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck5" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck5">Fri</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck6" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck6">Sat</label>
                                                                </div>
                                                                <div>
                                                                    <input type="checkbox" className="btn-check" id="btncheck7" />
                                                                    <label className="btn btn-days-checkbox fw-normal" htmlFor="btncheck7">Sun</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Limits <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="d-flex">
                                                                <div className="form-check me-3">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">No Limit</label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">Limit</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Daily Limit (hrs/day) <span className="text-danger">*</span>
                                                                </label>
                                                                <input type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className=" mb-3">
                                                                <label className="form-label">Work Time <span className="text-danger">*</span></label>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="input-icon-end position-relative w-100">
                                                                        <input type="text" className="form-control timepicker" placeholder="09:00 AM - 07:00 PM" />
                                                                        <span className="input-icon-addon">
																			<i className="ti ti-clock-hour-3 text-gray-7"></i>
																		</span>
                                                                    </div>
                                                                    <div className="form-check form-check-md ms-3 flex-shrink-0">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                        <label className="fs-14">All Days</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Timezone <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>Eastern Standard Time - UTC -5</option>
                                                                <option>Central Standard Time - UTC -6</option>
                                                                <option>Pacific Standard Time - UTC -8</option>
                                                                <option>India Standard Time - UTC +5:30</option>
                                                                <option>Central European Time - UTC +1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a href="#" className="btn btn-light btn-md me-2">Cancel</a>
                                                <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Work Limits --> */}
									
									{/* <!-- Reports--> */}
                                    <div className="tab-pane fade" id="reports" role="tabpanel">
                                        <form action="users.html">
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Reports Type <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option>Timesheet Report</option>
                                                                <option>Activity Summary</option>
                                                                <option>Web & App Usage</option>
                                                                <option>Poor Time Use</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a href="#" className="btn btn-light btn-md me-2">Cancel</a>
                                                <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Reports--> */}
									
									{/* <!-- Additional Info--> */}
                                    <div className="tab-pane fade" id="additional-information" role="tabpanel">
                                        <form action="users.html">
                                            <div className="border-bottom mb-3">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="form-check form-switch me-2">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                    <span className="status-label">Take Screenshot</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Screenshot <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="select">
                                                            <option>Select</option>
                                                            <option >Every 2 Mins</option>
                                                            <option>Every 5 Mins</option>
                                                            <option>Every 10 Mins</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="form-check form-switch me-2">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                    <span className="status-label">Manual Time</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="form-check form-switch me-2">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                    <span className="status-label">Delete Screenshots</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="form-check form-switch me-2">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                    <span className="status-label">Permanent Task</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="form-check form-switch me-2">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                    <span className="status-label">Add member to all new projects</span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Inactive Time starts after <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option > 2 Mins</option>
                                                                <option> 5 Mins</option>
                                                                <option> 10 Mins</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Allowed Apps
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option > All Apps</option>
                                                                <option> Google Chrome</option>
                                                                <option> VS Code</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Keep Idle Time <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Select</option>
                                                                <option >Every 2 Mins</option>
                                                                <option>Every 5 Mins</option>
                                                                <option>Every 10 Mins</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a href="#" className="btn btn-light btn-md me-2">Cancel</a>
                                                <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Additional Info--> */}
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  );
}