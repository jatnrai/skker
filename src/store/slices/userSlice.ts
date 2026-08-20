import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  profile: {
    name: string;
    role: string;
    avatar: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
  };
}

const initialState: UserState = {
  profile: {
    name: 'John Doe',
    role: 'Premium Member',
    avatar: 'https://i.pravatar.cc/150?u=johndoe',
  },
  preferences: {
    theme: 'system',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<UserState['profile']>>) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    setThemePreference: (state, action: PayloadAction<UserState['preferences']['theme']>) => {
      state.preferences.theme = action.payload;
    },
  },
});

export const { updateProfile, setThemePreference } = userSlice.actions;
export default userSlice.reducer;
