import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { isCartVisible: false, notification: null },
	reducers: {
		toggleCartVisiblilty(state) {
			state.isCartVisible = !state.isCartVisible;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
