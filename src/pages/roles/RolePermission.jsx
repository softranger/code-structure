import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';

export default function RolePermission() {
    const navigate = useNavigate();


      return (
        <div>
        <div className="mb-4 d-flex align-items-center flex-wrap gap-2 justify-content-between">
            <div>
                {/* <!-- Breadcrumb --> */}
                <div className="mb-4">
                    <a href="roles-permissions.html" className="fs-14 text-gray-9"><i className="ti ti-arrow-left me-1"></i>Back to Role</a>
                </div>
                {/* <!-- /Breadcrumb --> */}

                {/* <!-- Search --> */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 table-header mb-4">
                    <div className="d-flex align-items-center">
                        <h4 className="fw-bold">Permissions</h4>
                        <span className="badge badge-success ms-2">Role : Admin</span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-3">
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
                                                <label className="form-label">Module</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1" selected>Employees</option>
                                                <option value="m-2">Projects & Tasks</option>
                                                <option value="m-3">Screenshots</option>
                                                <option value="m-4">Reports</option>
                                                <option value="m-5">Users</option>
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
                        <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" id="select-all" />
                            <label for="select-all">Select All</label>
                        </div>
                    </div>
                </div>
                {/* <!-- /Search --> */}

                {/* <!-- Table List --> */}
                <div className="table-responsive no-filter no-pagination">
                    <table className="table datatable">
                        <thead className="thead-light text-uppercase">
                            <tr>
                                <th className="no-sort">Modules</th>
                                <th className="no-sort">Allow All</th>
                                <th className="no-sort">Read</th>
                                <th className="no-sort">Write</th>
                                <th className="no-sort">Create</th>
                                <th className="no-sort">Delete</th>
                                <th className="no-sort">Import</th>
                                <th className="no-sort">Export</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-gray-9 fw-medium">Insignts</td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-check form-check-md">
                                        <input className="form-check-input" type="checkbox" checked />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- /Table List --> */}

                <div className="d-flex justify-content-end align-items-center mt-4 mb-4">
                    <a href="#" className="btn btn-white btn-md me-2">Cancel</a>
                    <a href="#" className="btn btn-dark btn-md">Save Changes</a>
                </div>

            </div>
        </div>
        
        </div>
  );
}