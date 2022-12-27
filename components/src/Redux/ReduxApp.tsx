import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';

export interface AppContextType {
  greeting: string;
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};
const initialState: AppContextType = {
  greeting: '',
  moodList: [],
  handleSelectMood: () => {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setGreeting: (state, action: PayloadAction<string>) => {
      state.greeting = action.payload;
    },
    setMoodList: (state, action: PayloadAction<[]>) => {
      state.moodList = action.payload;
    },
    setHandleSelectMood: (state, action: PayloadAction) => {
      state.handleSelectMood = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
