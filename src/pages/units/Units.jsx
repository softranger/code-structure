import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';

export default function unitsIndex() {
    const navigate = useNavigate();

    const [units, setunits] = useState([]);
    const [newUnitName, setNewUnitName] = useState('');
    const [newSlug, setNewSlug] = useState('');
    const [editingUnit, setEditingUnit] = useState({ id: '', name: '', slug: '', status: true });


    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [filters, setFilters] = useState({
        level: [],
        status: []
    });
    const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'
    
   const handleAddUnit = async (e) => {
    e.preventDefault();

    if (!newUnitName.trim()) {
        alert('Unit name is required');
        return;
    }

    try {
        await axios.post('http://localhost:5000/api/unit/store', {
            name: newUnitName,
            slug: newSlug,
            status: true,
          });

        // Close modal
        const modalEl = document.getElementById('add-unit');
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.hide();

      // Clear input and refetch units
    setNewUnitName('');
fetchunits(page, searchKey, filters, sortBy);
        // Show toast
        const toastEl = document.getElementById('successToast');
        const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
        toast.show();

    } catch (error) {
        console.error('Error creating unit:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Failed to create unit');
    }
};

    const fetchunits = async (page = 1, search = '', filters = {}, sort = 'newest') => {
        try {
            const res = await axios.get(`http://localhost:5000/api/unit`, {
                params: {
                    page,
                    limit: 10,
                    search_key: search,
                    name: filters.name,
                    slug: filters.slug,
                    status: filters.status,
                    sort_by: sort,
                }
            });
            setunits(res.data.units);
            setTotalPages(res.data.totalPages);
            setPage(res.data.page);
        } catch (err) {
            console.error('Error fetching units', err);
        }
    };


    useEffect(() => {
        fetchunits(page, searchKey, filters, sortBy);
    }, [page, searchKey, filters, sortBy]);


    const handleSearchResults = (key) => {
        setSearchKey(key);
        setPage(1); // reset to first page on new search
    };

    const handlePermission = (unitId) => {
       navigate(`/unit/${unitId}`);
    };

const handleEdit = (unitId) => {
    const unit = units.find((r) => r._id === unitId);
    if (unit) {
        setEditingUnit({
            id: unit._id,
            name: unit.name,
            status: unit.active,
        });

        const modalEl = document.getElementById('edit-unit');
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
};

const handleUpdateRole = async (e) => {
    e.preventDefault();

    try {
        await axios.put(`http://localhost:5000/api/unit/${editingUnit.id}`, {
            name: editingUnit.name,
            active: editingUnit.status
        });

        const modalEl = document.getElementById('edit-unit');
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.hide();

        fetchunits();
    } catch (error) {
        console.error('Error updating role:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Failed to update role');
    }
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
    if (units.length === 0) {
        alert('No data to download');
        return;
    }

    const headers = ['Unit Name', 'Created On', 'Status', 'Action']; // adjust as needed
    const rows = units.map(unit => [
        unit.name,
        unit.status || 'N/A'
    ]);

    const csvContent =
        'data:text/csv;charset=utf-8,' +
        [headers, ...rows].map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'units.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    const  handleDelete = async (unitId) => {
        if (!window.confirm('Are you sure you want to delete this unit?')) return;

        try {
          const res=  await axios.delete(`http://localhost:5000/api/unit/${unitId}`);
            alert('Unit deleted');
            fetchunits(page); // re-fetch the list
        } catch (error) {
            console.error('Error deleting Unit', error);
            alert('Error deleting Unit');
        }
    };

    const handlePrev = () => setPage(p => Math.max(p - 1, 1));
    const handleNext = () => setPage(p => Math.min(p + 1, totalPages));


      return (
        <div>
                {/* <!-- Breadcrumb --> */}
                <div className="mb-4 d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <div>
                        <h4 className="mb-1 fw-bold">Units</h4>
                        <nav>
                            <ol className="breadcrumb breadcrumb-dot mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="units.html">Units</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Units</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="d-flex align-items-center">
                        {/* <div className="dropdown me-2">
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
                                                <label className="form-label">Unit Name</label>
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
                        </div> */}
                        <a href="#" className="btn btn-md btn-primary" data-bs-toggle="modal" data-bs-target="#add-role"><i className="ti ti-plus me-1"></i>Add New</a>
                    </div>
                </div>
                {/* <!-- /Breadcrumb --> */}

                {/* <!-- Table List --> */}
                <div className="table-responsive border border-bottom-0 mb-4">
                    <table className="table">
                        <thead className="thead-light text-uppercase">
                            <tr>
                                <th>Unit Name</th>
                                <th>Created On</th>
                                {/* <th>No of units</th> */}
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                         {Array.isArray(units) && units.map(unit => (
  <tr key={unit._id}>
    <td>
      <div className="d-flex align-items-center">
        <div className="ms-2">
          <h6 className="fw-medium mb-1">{unit.name}</h6>
        </div>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <div className="ms-2">
          <h6 className="fw-medium mb-1">{new Date(unit.createdAt).toLocaleDateString()}</h6>
        </div>
      </div>
    </td>
    <td>
      <span className="badge badge-sm bg-success fs-10">
        <i className="ti ti-point-filled"></i> Active
      </span>
    </td>
    <td className="action-item">
      <a className="action-set dot-settings" href="#" data-bs-toggle="dropdown" aria-expanded="true">
        <i className="ti ti-dots-vertical" aria-hidden="true"></i>
      </a>
      <ul className="dropdown-menu p-2 rounded-2">
        <li>
          <a href="#" onClick={() => handleEdit(unit._id)} className="dropdown-item rounded-2" data-bs-toggle="modal" data-bs-target="#edit-unit">
            <i className="ti ti-edit me-2"></i>Edit
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handlePermission(unit._id)} className="dropdown-item rounded-2">
            <i className="ti ti-shield-plus me-2"></i>Active
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleDelete(unit._id)} className="dropdown-item rounded-2 text-danger">
            <i className="ti ti-trash me-2"></i>Remove Unit
          </a>
        </li>
      </ul>
    </td>
  </tr>
))}

                        </tbody>
                    </table>
                </div>
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
                {/* <!-- /Table List --> */}
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
            id="successToast"
            className="toast align-items-center text-bg-success border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex">
            <div className="toast-body">
                Role created successfully!
            </div>
            <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
            ></button>
            </div>
        </div>
        </div>


                {/* <!-- Add Role --> */}
        <div className="modal fade" id="add-role">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Add Unit</h5>
                <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                >
                <i className="ti ti-x"></i>
                </button>
            </div>
            <form onSubmit={handleAddUnit}>
                <div className="modal-body">
                <div>
                    <label className="form-label">
                    Unit <span className="text-danger">*</span>
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={newUnitName}
                    onChange={(e) => setNewUnitName(e.target.value)}
                    />
                </div>
                 <div>
                    <label className="form-label">
                    Slug <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      id="slug"
                      className="form-control"
                      value={newSlug}
                      onChange={(e) => setNewSlug(e.target.value)}
                    />
                </div>
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-white btn-md me-2"
                    data-bs-dismiss="modal"
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-md">
                    Add Unit
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

        {/* <!-- /Add Role --> */}

        {/* <!-- Edit Role --> */}
<div className="modal fade" id="edit-unit">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Role</h5>
        <button
          type="button"
          className="btn-close custom-btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ti ti-x"></i>
        </button>
      </div>
      <form onSubmit={handleUpdateRole}>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">
              Role Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={editingUnit.name}
              onChange={(e) =>
                setEditingUnit({ ...editingUnit, name: e.target.value })
              }
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="form-label">Status</span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={editingUnit.status}
                onChange={(e) =>
                  setEditingUnit({ ...editingUnit, status: e.target.checked })
                }
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-white btn-md me-2"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
  );
}