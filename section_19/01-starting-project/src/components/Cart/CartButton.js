import classes from "./CartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";


const CartButton = (props) => {
	const dispatch = useDispatch();

	const cartClickHandler = () => {
		dispatch(uiActions.toggleCartVisiblilty());
	};

  const items = useSelector(state => state.cart.items);

  let totalItems = 0;
  items.forEach((item) => {totalItems += item.quantity;});
	return (
		<button className={classes.button} onClick={cartClickHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalItems}</span>
		</button>
	);
};

export default CartButton;
