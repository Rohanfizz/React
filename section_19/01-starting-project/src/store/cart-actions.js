import { uiActions } from "./ui-slice";
import {cartActions} from './cart-slice';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://react-http-7caf1-default-rtdb.firebaseio.com/cart.json"
			);

			if (!response.ok) {
				throw new Error("Could not fetch cart data!");
			}

			const responseData = await response.json();

			return responseData;
		};

		try {
			const cartData = await fetchData();
            dispatch(cartActions.replaceCart({ 
                items: cartData.items || [],totalQuantity: cartData.totalQuantity
            }));
		} catch (err) {
            dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Fetching Cart Data failed!",
				})
			);
        }
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "sending",
				message: "Sending Cart Data!",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-http-7caf1-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({                          // not sending the whole cart so that cart.changed does not go to firebase
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed");
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "success",
					message: "Sent Cart Data Successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending Cart Data failed!",
				})
			);
		}
	};
};
