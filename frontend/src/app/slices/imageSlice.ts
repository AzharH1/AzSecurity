import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface imageState {
  imageLoaded: boolean;
}

const initialState: imageState = {
  imageLoaded: false,
} as imageState;

const imageLoadingSlice = createSlice({
  name: "imageLoading",
  initialState,
  reducers: {
    setImageLoaded: (state, action: PayloadAction<boolean>) => {
      state.imageLoaded = action.payload;
    },
  },
});

export const { setImageLoaded } = imageLoadingSlice.actions;
export default imageLoadingSlice.reducer;
