import boxSlice from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: {boxList: boxSlice.reducer}});

type RootState = ReturnType<typeof store.getState>

export const getBoxList = (state:RootState) => state.boxList.boxList;

export default store;