import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';

export default function RolesIndex() {
    const navigate = useNavigate();

    const [roles, setroles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [filters, setFilters] = useState({
        employee: [],
        level: [],
        status: []
    });
    const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'

    const fetchroles = async (page = 1, search = '', filters = {}, sort = 'newest') => {
        try {
            const res = await axios.get(`http://localhost:5000/api/roles`, {
                params: {
                    page,
                    limit: 10,
                    search_key: search,
                    employee: filters.employee,
                    level: filters.level,
                    status: filters.status,
                    sort_by: sort,
                }
            });
            setroles(res.data.roles);
            setTotalPages(res.data.totalPages);
            setPage(res.data.page);
        } catch (err) {
            console.error('Error fetching roles', err);
        }
    };


    useEffect(() => {
        fetchroles(page, searchKey, filters, sortBy);
    }, [page, searchKey, filters, sortBy]);


    const handleSearchResults = (key) => {
        setSearchKey(key);
        setPage(1); // reset to first page on new search
    };

    const handlePermission = (roleId) => {
       navigate(`/roles/permission/${roleId}`);
    };

    const handleEdit = (roleId) => {
       navigate(`/roles/edit-role/${roleId}`);
    };

    const handleFilterApply = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
    };

    const handleSort = (order) => {
        setSortBy(order); // 'newest' or 'oldest'
        setPage(1);
    };

    const handleDownload = () => {
    if (roles.length === 0) {
        alert('No data to download');
        return;
    }

    const headers = ['Role Name', 'Created On', 'No Of roles', 'Status', 'Action']; // adjust as needed
    const rows = roles.map(role => [
        role.name,
        role.permission,
        role.status || 'N/A'
    ]);

    const csvContent =
        'data:text/csv;charset=utf-8,' +
        [headers, ...rows].map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'roles.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    const  handleDelete = async (roleId) => {
        if (!window.confirm('Are you sure you want to delete this role?')) return;

        try {
          const res=  await axios.delete(`http://localhost:5000/api/roles/${roleId}`);
            alert('Role deleted');
            fetchroles(page); // re-fetch the list
        } catch (error) {
            console.error('Error deleting Role', error);
            alert('Error deleting Role');
        }
    };

    const handlePrev = () => setPage(p => Math.max(p - 1, 1));
    const handleNext = () => setPage(p => Math.min(p + 1, totalPages));


      return (
        <div>
                {/* <!-- Breadcrumb --> */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 table-header mb-3">
                    <div>
                        <h4 className="mb-1 fw-bold">Roles & Permissions</h4>
                        <nav>
                            <ol className="breadcrumb breadcrumb-dot mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="roles.html">roles</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Roles & Permissions</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown me-2">
                            <a href="#" className="btn btn-white d-inline-flex align-items-center py-1" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
                                                <label className="form-label">Roll Name</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1" selected>Owner</option>
                                                <option value="m-2">Admin</option>
                                                <option value="m-3">Manager</option>
                                                <option value="m-4">role</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="form-label">Created On</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <div className="input-icon position-relative">
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-9"></i>
                                                </span>
                                                <input type="text" className="form-control datepicker" value="11 May 2025, 12:00 PM" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <label className="form-label">Status</label>
                                                <a href="#" className="link-primary mb-1">Reset</a>
                                            </div>
                                            <select className="select2" multiple="multiple">
                                                <option value="m-1" selected>Active</option>
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
                        <a href="#" className="btn btn-md btn-primary" data-bs-toggle="modal" data-bs-target="#add-role"><i className="ti ti-plus me-1"></i>Add New</a>
                    </div>
                </div>
                {/* <!-- /Breadcrumb --> */}

                {/* <!-- Table List --> */}
                <div className="table-responsive border border-bottom-0 mb-4">
                    <table className="table">
                        <thead className="thead-light text-uppercase">
                            <tr>
                                <th>Role Name</th>
                                <th>Created On</th>
                                {/* <th>No of roles</th> */}
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                         {roles.map(role => (
                            <tr key={role._id}>
                            <td>
                                <div className="d-flex align-items-center">
                            
                                <div className="ms-2">
                                    <h6 className="fw-medium mb-1">{role.name}</h6>
                                </div>
                                </div>
                            </td>
                             <td>
                                <div className="d-flex align-items-center">
                            
                                <div className="ms-2">
                                    <h6 className="fw-medium mb-1">{role.createdAtFormatted}</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-sm bg-success fs-10">
                                <i className="ti ti-point-filled"></i> Active
                                </span>
                            </td>
                             <td class="action-item">
                                    <a class="action-set dot-settings" href="#" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i class="ti ti-dots-vertical" aria-hidden="true"></i>
                                    </a>
                                    <ul class="dropdown-menu p-2 rounded-2">
                                        <li>
                                            <a href="#" class="dropdown-item rounded-2" data-bs-toggle="modal" data-bs-target="#edit-role"><i class="ti ti-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="#" 
                                             onClick={() => handlePermission(role._id)}
                                            class="dropdown-item rounded-2"><i class="ti ti-shield-plus me-2"></i>Permissions</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded-2 text-danger"><i class="ti ti-trash me-2"></i>Remove Role</a>
                                        </li>
                                    </ul>
                                </td>
                            {/* <td className="action-item">
                                <a className="action-set dot-settings" href="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2 rounded-2">
                                 <li>
                                    <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => handleEdit(role._id)}
                                    >
                                    Edit role
                                    </a>
                                </li>
                                <li><a href="#" className="dropdown-item">Suspend role</a></li>
                                <li>
                                 <a
                                    href="#"
                                    className="dropdown-item text-danger"
                                    onClick={() => handleDelete(role._id)}
                                    >
                                    Remove role
                                 </a>
                                </li>
                                </ul>
                            </td> */}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {/* <!-- /Table List --> */}


        {/* <!-- Add Role --> */}
        <div className="modal fade" id="add-role">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add Role</h5>
						<button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ti ti-x"></i></button>
					</div>
                    <form action="roles-permissions.html">
                        <div className="modal-body">
                            <div>
                                <label className="form-label">Role Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white btn-md me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary btn-md">Add Role</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- /Add Role --> */}

        {/* <!-- Edit Role --> */}
        <div className="modal fade" id="edit-role">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Role</h5>
						<button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ti ti-x"></i></button>
					</div>
                    <form action="roles-permissions.html">
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Role Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value="role" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="form-label">Status</span>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" checked />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white btn-md me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary btn-md">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- /Edit Role --> */}
        </div>
  );
}