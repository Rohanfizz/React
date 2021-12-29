import react, { useState } from "react";
import Card from "../UI/Card";
import styles from "./ListContainer.module.css";
import ListEntry from "./ListEntry";

const ListContainer = (props) => {
	return (
		<Card
			className={`${styles["list-container"]} ${
				props.items.length == 0 ? styles.hide : ""
			}`}
		>
			{props.items.map((obj, idx) => (
				<ListEntry key={idx} name={obj.name} age={obj.age} />
			))}
		</Card>
	);
};

export default ListContainer;
