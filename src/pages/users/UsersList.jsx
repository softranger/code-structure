import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components//SearchInput';

export default function UserList() {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [filters, setFilters] = useState({
        employee: [],
        level: [],
        status: []
    });
    const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'

    const fetchUsers = async (page = 1, search = '', filters = {}, sort = 'newest') => {
        try {
            const res = await axios.get(`http://localhost:5000/api/users`, {
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
            setUsers(res.data.users);
            setTotalPages(res.data.totalPages);
            setPage(res.data.page);
        } catch (err) {
            console.error('Error fetching users', err);
        }
    };


    useEffect(() => {
        fetchUsers(page, searchKey, filters, sortBy);
    }, [page, searchKey, filters, sortBy]);


    const handleSearchResults = (key) => {
        setSearchKey(key);
        setPage(1); // reset to first page on new search
    };

    const handleEdit = (userId) => {
       navigate(`/users/edit-user/${userId}`);
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
    if (users.length === 0) {
        alert('No data to download');
        return;
    }

    const headers = ['First Name', 'Last Name', 'Email', 'Status']; // adjust as needed
    const rows = users.map(user => [
        user.first_name,
        user.last_name,
        user.email,
        user.status || 'N/A'
    ]);

    const csvContent =
        'data:text/csv;charset=utf-8,' +
        [headers, ...rows].map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    const  handleDelete = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;

        try {
          const res=  await axios.delete(`http://localhost:5000/api/users/${userId}`);
            alert('User deleted');
            fetchUsers(page); // re-fetch the list
        } catch (error) {
            console.error('Error deleting user', error);
            alert('Error deleting user');
        }
    };

    const handlePrev = () => setPage(p => Math.max(p - 1, 1));
    const handleNext = () => setPage(p => Math.min(p + 1, totalPages));




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
                             <SearchInput
                                onSearch={handleSearchResults} // ✅ Correct
                                placeholder="Search users..."
                            />
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
                                    <a href="#" onClick={() => handleSort('newest')}>Newest</a>
                                </li>
                                <li>
                                <a href="#" onClick={() => handleSort('oldest')}>Oldest</a>
                                </li>
                            </ul>
                        </div>
                        <span className="text-gray-1">|</span>
                            <a
                            href="#"
                            className="btn btn-icon btn-white btn-md d-flex align-items-center justify-content-center"
                            onClick={handleDownload}
                            > <i className="ti ti-download"></i> </a>  
                          <a href="#" className="btn btn-icon btn-white btn-md d-flex align-items-center justify-content-center"><i className="ti ti-columns"></i></a>
                    </div>
                </div>

                 {/* Table List  */}
                <div className="table-responsive">
                    <table className="table datatable">
                        <thead className="thead-light">
                        <tr>
                            <th>NAME</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>LEVEL</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                            <td>
                                <div className="d-flex align-items-center">
                                <a className="avatar online avatar-rounded">
                                    <img src="../assets/img/users/user-01.jpg" className="img-fluid" alt="img" />
                                </a>
                                <div className="ms-2">
                                    <h6 className="fw-medium mb-1">{user.name}</h6>
                                </div>
                                </div>
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>User</td>
                            <td>
                                <span className="badge badge-sm bg-success fs-10">
                                <i className="ti ti-point-filled"></i> Active
                                </span>
                            </td>
                            <td className="action-item">
                                <a className="action-set dot-settings" href="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu p-2 rounded-2">
                                 <li>
                                    <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => handleEdit(user._id)}
                                    >
                                    Edit User
                                    </a>
                                </li>
                                <li><a href="#" className="dropdown-item">Suspend User</a></li>
                                <li>
                                 <a
                                    href="#"
                                    className="dropdown-item text-danger"
                                    onClick={() => handleDelete(user._id)}
                                    >
                                    Remove User
                                 </a>
                                </li>
                                </ul>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-sm btn-outline-primary" disabled={page <= 1} onClick={handlePrev}>
                        Previous
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button className="btn btn-sm btn-outline-primary" disabled={page >= totalPages} onClick={handleNext}>
                        Next
                        </button>
                    </div>
                    </div>
                 {/* /Table List  */}
        </div>
  );
}