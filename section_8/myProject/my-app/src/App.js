import react, { useState } from "react";
import Form from "./Components/Form/Form";
import ListContainer from "./Components/EntryList/ListContainer";
import styles from "./App.module.css";

const DUMMY_DATA = [
	{
		name: "Rohan",
		age: "20",
	},
	{
		name: "Riya",
		age: "14",
	},
	{
		name: "Rajesh",
		age: "50",
	},
	{
		name: "Meena",
		age: "20",
	},
];

const App = (props) => {
	const [data, dataChanger] = useState([]);

	const onSubmitForm = (obj) => {
		dataChanger((previousState) => {
			return [obj, ...previousState];
		});
	};

	return (
		<div className={`${styles["app"]}`}>
			<Form onSubmitForm={onSubmitForm} />
			<ListContainer items={data} />
		</div>
	);
};

export default App;
