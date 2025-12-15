import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../features/users/userSlice';
import UserForm from './UserForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  const handleAddNew = () => {
    setCurrentUser(null);
    setIsFormOpen(true);
  };

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard">
      <header className="header">
        <h1>User Dashboard</h1>
        {/* ADD Button */}
        <button className="btn-add" onClick={handleAddNew}>+ Add User</button>
      </header>

      {isFormOpen && (
        <div className="form-card-container">
          <UserForm 
            currentUser={currentUser} 
            setEditing={setCurrentUser} 
            closeForm={() => setIsFormOpen(false)} 
          />
        </div>
      )}

      <div className="table-responsive">
        <table className="user-table">
          <thead>
            <tr>
              <th style={{ width: '50px' }}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th style={{ width: '180px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><strong>{user.name}</strong></td>
                <td style={{ color: '#6b7280' }}>{user.email}</td>
                <td className="action-cells">
                  {/* EDIT Button */}
                  <button className="btn-edit" onClick={() => handleEdit(user)}>Edit</button>
                  {/* DELETE Button */}
                  <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;