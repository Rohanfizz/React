import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

// const DUMMY_DATA = [
// 	{ title: "Soap", price: 10, quantity: 3, total: 30, id: 1 },
// ];

const Cart = (props) => {
  const itemsArray = useSelector(state =>  state.cart.items);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{itemsArray.map((object) => {
					return (
						<CartItem
							key={object.id}
							id={object.id}
							item={object}
						/>
					);
				})}

				{/* <CartItem
					item={{
						title: "Test Item",
						quantity: 3,
						total: 18,
						price: 6,
					}}
				/> */}
			</ul>
		</Card>
	);
};

export default Cart;
