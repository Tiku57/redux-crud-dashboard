import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Added useSelector
import { addUser, updateUser } from '../features/users/userSlice';

const UserForm = ({ currentUser, setEditing, closeForm }) => {
  const dispatch = useDispatch();
  
  // 1. Get current users from Redux to calculate the next ID
  const { data: users } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentUser) {
      // Update Logic (Same as before)
      dispatch(updateUser({ ...currentUser, ...formData }));
    } else {
      // 2. Calculate New ID: Find the Max ID and add 1
      // If list is empty, start at 1. If list has 10, max is 10, so new is 11.
      const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
      
      const newUser = {
        id: maxId + 1, // Logic for sequential IDs (11, 12, 13...)
        ...formData,
      };
      
      dispatch(addUser(newUser));
    }
    
    closeForm();
  };

  return (
    <div className="form-container">
      <h3>{currentUser ? 'Edit User' : 'Add New User'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <div className="form-actions">
          <button type="submit" className="btn-save">
            {currentUser ? 'Save Changes' : 'Create User'}
          </button>
          <button type="button" className="btn-cancel" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;