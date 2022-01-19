import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
	name: "cart",
	initialState: { items: [] ,totalQuantity: 0, changed: false},
	reducers: {
		replaceCart(state,action){
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart(state, action) {
			const newItem = action.payload;
			state.changed = true;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					quantity: 1,
					price: newItem.price,
					total: newItem.price,
				});
			} else {	
				existingItem.quantity++;
				existingItem.total += newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const itemId = action.payload;
			state.changed = true;
			const existingItem = state.items.find(
				(item) => item.id === itemId.id
			);
			if (!existingItem) return;
			existingItem.quantity--;
			state.totalQuantity--;
			existingItem.total -= existingItem.price;
			if (existingItem.quantity === 0)
				state.items = state.items.filter(
					(item) => item.id !== itemId.id
				);
			if(state.totalQuantity === 0) state.items = [];
		},
	},
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
