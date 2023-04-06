import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

export interface ILayout {
  header?: boolean;
  footer?: boolean;
  menu?: boolean;
  navigation?: boolean;
  privacy?: string;
}

export type LayoutAction = {
  type: string;
  payload: ILayout;
};

const initialState: ILayout = {
  header: true,
  footer: true,
  menu: false,
  navigation: false,
  privacy: '',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDisplayLayout: (state, action: PayloadAction<ILayout>) => {
      state.footer = !!action.payload.footer;
      state.header = !!action.payload.header;
      state.menu = !!action.payload.menu;
      state.navigation = !!action.payload.navigation;
      state.privacy = action.payload.privacy;
    },
  },
});

export const { setDisplayLayout } = layoutSlice.actions;

export const selectDisplayLayout = (state: RootState): ILayout => state.layout;

export default layoutSlice.reducer;
