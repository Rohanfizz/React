import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
	const history = useHistory();
	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);
	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredPassword = newPasswordInputRef.current.value;
		// add validation

		const response = await fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA6y-QH5X3ruNHw6FLe4e4TTspArmJjX-k",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: enteredPassword,
					returnSecureToken: false,
				}),
				headers: { "Content-Type": "application/json" },
			}
		);

		if (!response.ok) {
			throw new Error("Changing password failed");
		}
    history.replace('/');	
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					minLength="6"
					ref={newPasswordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
