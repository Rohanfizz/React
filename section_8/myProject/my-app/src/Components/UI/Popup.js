import React from "react";
import Card from "./Card";
import "./Popup.css";

const Popup = (props) => {
	const onClickHandler = () => {
		props.removePopup();
	};
	return (
		<div className={`popup ${props.className}`}>
			<Card className="popup-inner">
				{props.message}
				<button onClick={onClickHandler}>Okay</button>
			</Card>
		</div>
	);
};

export default Popup;
