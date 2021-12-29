import react, { useState } from "react";
import Card from "../UI/Card";
import Popup from "../UI/Popup";
import Wrapper from "../UI/Wrapper";
import styles from "./Form.css";

const Form = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [err, setErr] = useState(null);

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};
	const resetForm = () => {
		setEnteredName("");
		setEnteredAge("");
	};

	const popupRemoveHandler = () => {
		setErr(null);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const obj = {
			name: enteredName,
			age: enteredAge,
		};

		if (obj.name.length === 0 || obj.age.length === 0) {
			setErr({
				message: "Input fields are empty!",
			});
			return;
		} else if (+obj.age <= 0 || +obj.age > 100) {
			setErr({
				message: "Enter Valid Age!",
			});
			return;
		} else {
			props.onSubmitForm(obj);
			resetForm();
		}
	};
	return (
		<Wrapper>
			<Card className="form-container">
				<form onSubmit={submitHandler}>
					<h2>Username</h2>
					<input
						type="text"
						className="user-name textbox"
						onChange={nameChangeHandler}
						value={enteredName}
					/>
					<h2>Age</h2>
					<input
						type="text"
						className="user-age textbox"
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Card className="submit-form">
						<button
							type="submit"
							value="Submit"
							
						>
							Submit
						</button>
					</Card>
				</form>
			</Card>
			{err && (
				<Popup
					message={err.message}
					removePopup={popupRemoveHandler}
				></Popup>
			)}
		</Wrapper>
	);
};

export default Form;
