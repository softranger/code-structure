import { NavLink, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function UserCreate() {
  const { id: userId } = useParams();  // check if we're editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const isEditMode = Boolean(userId);

  useEffect(() => {
    if (isEditMode) {
      setLoading(true);
      axios.get(`http://localhost:5000/api/users/${userId}`)
        .then((res) => {
          const user = res.data;
          console.log(user);
          setFormData({
            name: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            address: user.address || '',
            password: ''  // never prefill password
          });
        })
        .catch(err => {
          console.error(err);
          alert('Failed to load user data.');
        })
        .finally(() => setLoading(false));
    }
  }, [userId]);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.phone) errs.phone = "Phone is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      let response;
      if (isEditMode) {
        console.log("iseditable");
        response = await axios.put(
          `http://localhost:5000/api/users/update/${userId}`,
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
        alert('User updated successfully');
      } else {
        console.log("store");

        response = await axios.post(
          "http://localhost:5000/api/users/store",
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
        alert('User created successfully');
      }

      navigate('/users');
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleNavigation = (e) => {
    navigate('/users');
  }


  return (
        <div>
               <div className="row justify-content-center">
                    <div className="col-md-10">
                        {/* <!-- Breadcrumb --> */}
                        <div className="mb-4">
                            <a href="#" onClick={(e) => handleNavigation()}  className="text-gray-9"><i className="ti ti-arrow-left me-1"></i>Back to Users List</a>
                        </div>
                        {/* <!-- /Breadcrumb --> */}

                        <div className="card">
                            <div className="card-header">
                                <h5 className="fw-bold">{isEditMode ? "Edit User" : "Create User"}</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs tab-style-project d-inline-flex d-block" role="tablist">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center active" data-bs-toggle="tab" data-bs-target="#basic-information">Basic Information</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#employee-details">Employee Details</a>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <a href="#" className="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#work-limits">Work Limits</a>
                                    </li> */}
                                </ul>
                                <div className="tab-content">
								
									{/* <!-- Basic Info --> */}
                                    <div className="tab-pane fade show active" id="basic-information" role="tabpanel">
                                        <p className="text-gray-9 fw-medium mb-3">Basic information</p>
                                          <form onSubmit={handleSubmit}>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Name <span className="text-danger">*</span>
                                                            </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                User ID <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">
                                                                Email Address <span className="text-danger">*</span>
                                                            </label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <div className="input-blocks">
                                                                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.phone}</small>}                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* <div className="col-md-6">
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
                                                    </div> */}
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
          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />

          
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-3">
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
                                                                State
                                                            </label>
                                                            <input type="text" className="form-control" />
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
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <button type="button" className="btn btn-light btn-md me-2">Cancel</button>
                                                <button type="submit" className="btn btn-dark btn-md">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
									{/* <!-- /Basic Info --> */}
									
									{/* <!-- Employee Details --> */}
                                    {/* <div className="tab-pane fade" id="employee-details" role="tabpanel">
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
                                    </div> */}
									{/* <!-- /Employee Details --> */}
									
									{/* <!-- Work Limits --> */}
                                    {/* <div className="tab-pane fade" id="work-limits" role="tabpanel">
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
                                    </div> */}
									{/* <!-- /Work Limits --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  );
}