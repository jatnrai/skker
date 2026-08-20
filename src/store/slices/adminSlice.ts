import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  dashboard: {
    totalUsers: number;
    activeSessions: number;
    revenue: number;
  };
}

const initialState: AdminState = {
  dashboard: {
    totalUsers: 1420,
    activeSessions: 342,
    revenue: 125000,
  },
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    updateDashboard: (state, action: PayloadAction<Partial<AdminState['dashboard']>>) => {
      state.dashboard = { ...state.dashboard, ...action.payload };
    },
  },
});

export const { updateDashboard } = adminSlice.actions;
export default adminSlice.reducer;
