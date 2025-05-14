// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store; // ✅ now it's the default export


