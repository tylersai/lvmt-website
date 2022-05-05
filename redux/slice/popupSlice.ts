import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: false,
  reducers: {
    openPopup(state, action) {
      state = true;
    },
    closePopup(state, action) {
      state = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
