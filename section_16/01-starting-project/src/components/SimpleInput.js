import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const enteredEmailIsValid = validateEmail(enteredEmail);
	const emailInputIsValid = enteredEmailIsTouched && !enteredEmailIsValid;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameIsTouched(true);
	};
	const emailInputBlurHandler = (event) => {
		setEnteredEmailIsTouched(true);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		setEnteredNameIsTouched(true);
		setEnteredEmailIsTouched(true);
		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		setEnteredName("");
		setEnteredEmail("");
		setEnteredNameIsTouched(false);
		setEnteredEmailIsTouched(false);
	};

	const nameInputClasses = !nameInputIsInvalid
		? "form-control"
		: "form-control invalid";
	const emailInputClasses = !emailInputIsValid
		? "form-control"
		: "form-control invalid";

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
			</div>
			{nameInputIsInvalid && <p>Name input field cant be empty.</p>}

			<div className={emailInputClasses}>
				<label htmlFor="email">Your E-Mail</label>
				<input
					type="email"
					id="email"
					value={enteredEmail}
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
			</div>
			{emailInputIsValid && <p>Please Enter a valid input</p>}
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
