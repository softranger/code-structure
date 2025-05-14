// src/store/sidebarSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileSidebar: false,
  miniSidebar: false,
  openMenus: {},
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setMobileSidebar: (state, action) => {
      state.mobileSidebar = action.payload;
    },
    setMiniSidebar: (state, action) => {
      state.miniSidebar = action.payload;
    },
    toggleMiniSidebar: (state) => {
      // console.log(state.miniSidebar);
      state.miniSidebar = !state.miniSidebar;
    },
    setExpandMenu: (state, action) => {
      state.expandMenu = action.payload;
    },
    toggleMenu: (state, action) => {
      const key = action.payload;
      state.openMenus[key] = !state.openMenus[key];
    },  
  },
});

export const { setMobileSidebar, setMiniSidebar, setExpandMenu, toggleMiniSidebar, toggleMenu } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
