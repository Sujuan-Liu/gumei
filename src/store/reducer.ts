import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import Menu from '../enums/menu';

export interface MainState {
  activeMenu: string,
  activeMenuIndex: number,
}

const initialState = {
  activeMenu: Menu.HOME.key,
  activeMenuIndex: 0,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeMenu: (state, action: PayloadAction<{ currentMenu: string, currentMenuIndex: number }>) => {
      console.log(state, action);
      const {
        currentMenu,
        currentMenuIndex,
      } = action.payload;
      state = {
        ...state,
        activeMenu: currentMenu,
        activeMenuIndex: currentMenuIndex,
      };
    }
  },
});

export const { changeMenu } = mainSlice.actions;
export const activeMenu = (state: RootState) => state.global.activeMenu;
export const activeMenuIndex = (state: RootState) => state.global.activeMenuIndex;

export default mainSlice.reducer;
