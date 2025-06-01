import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function RolePermission() {
  const navigate = useNavigate();
  const [allModules, setAllModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const { roleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allRes, roleRes] = await Promise.all([
          axios.get('http://localhost:5000/api/roles/permissions'),
          axios.get(`http://localhost:5000/api/roles/${roleId}/permissions`)
        ]);

        const rolePermissionsMap = new Map(
          roleRes.data.map((mod) => [mod.module, mod.permissions])
        );

        const prepared = allRes.data.map((mod) => ({
          module: mod.module,
          permissions: mod.permissions.reduce((acc, perm) => {
            acc[perm] = rolePermissionsMap.get(mod.module)?.includes(perm) || false;
            return acc;
          }, {}),
        }));

        setAllModules(prepared);
      } catch (err) {
        console.error('Error loading permissions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [roleId]);

  const handleToggle = (moduleIndex, permissionKey) => {
    setAllModules(prev =>
      prev.map((module, i) =>
        i === moduleIndex
          ? {
              ...module,
              permissions: {
                ...module.permissions,
                [permissionKey]: !module.permissions[permissionKey],
              },
            }
          : module
      )
    );
  };

  const handleSelectAll = () => {
    const allChecked = allModules.every((mod) =>
      Object.values(mod.permissions).every(Boolean)
    );

    setAllModules(prev =>
      prev.map(mod => ({
        ...mod,
        permissions: Object.fromEntries(
          Object.entries(mod.permissions).map(([key]) => [key, !allChecked])
        ),
      }))
    );
  };

  const allPermissionsChecked = allModules.length > 0 &&
    allModules.every((mod) => Object.values(mod.permissions).every(Boolean));

  const handleSave = async () => {
    try {
      const selectedPermissions = allModules.map(mod => ({
        module: mod.module,
        permissions: Object.entries(mod.permissions)
          .filter(([_, value]) => value)
          .map(([key]) => key),
      }));

      await axios.post(`http://localhost:5000/api/roles/${roleId}/permissions`, selectedPermissions);
      alert('Permissions updated successfully!');
    } catch (err) {
      console.error('Error saving permissions:', err);
    }
  };

  if (loading) return <div className="p-4">Loading permissions...</div>;

  return (
    <div className="container py-4">
      <div className="mb-4">
        <button
          onClick={() => navigate('/roles')}
          className="btn btn-link fs-14 text-gray-9 p-0"
        >
          <i className="ti ti-arrow-left me-1"></i>Back to Role
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 table-header mb-2">
        <div className="d-flex align-items-center">
          <h4 className="fw-bold mb-0">Permissions</h4>
          <span className="badge bg-success ms-2">Role: Admin</span>
        </div>
        <div className="form-check form-check-md">
          <input
            className="form-check-input"
            type="checkbox"
            id="select-all"
            checked={allPermissionsChecked}
            onChange={handleSelectAll}
          />
          <label htmlFor="select-all" className="form-check-label">
            Select All
          </label>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light text-uppercase">
            <tr>
              <th>Modules</th>
              <th>Read</th>
              <th>Write</th>
              <th>Create</th>
              <th>Delete</th>
              <th>Import</th>
              <th>Export</th>
            </tr>
          </thead>
          <tbody>
            {allModules.map((mod, index) => (
              <tr key={mod.module}>
                <td className="fw-medium text-start">{mod.module}</td>
                {['read', 'write', 'create', 'delete', 'import', 'export'].map((permKey) => (
                  <td key={permKey}>
                    {mod.permissions.hasOwnProperty(permKey) ? (
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={mod.permissions[permKey]}
                          onChange={() => handleToggle(index, permKey)}
                        />
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end align-items-center mt-4 mb-4">
        <button className="btn btn-white me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button className="btn btn-dark" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
