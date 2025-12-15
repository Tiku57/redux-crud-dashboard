import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. Async Thunk to Fetch Data from API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],       // Holds the list of users
    loading: false, // Loading state
    error: null,    // Error state
  },
  reducers: {
    // 2. Create: Add new user to the BOTTOM of the list
    addUser: (state, action) => {
      // .push() adds the new user to the END of the array
      state.data.push(action.payload);
    },

    // 3. Update: Edit an existing user
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.data.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },

    // 4. Delete: Remove a user by ID
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
  
  // Handle the API fetch states (Loading, Success, Error)
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;