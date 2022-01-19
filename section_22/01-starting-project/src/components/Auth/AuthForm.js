import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import {useHistory} from 'react-router-dom';
import classes from "./AuthForm.module.css";

const AuthForm = () => {
	const history = useHistory();
	const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setisLoading] = useState(false)
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const authCtx = useContext(AuthContext);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();
        setisLoading(true);

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		//optional addValidation
		let url;
		if (isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6y-QH5X3ruNHw6FLe4e4TTspArmJjX-k";
		} else {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6y-QH5X3ruNHw6FLe4e4TTspArmJjX-k";
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			header: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
                setisLoading(false);
                console.log(res);
				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						//show error modal
						let errorMessage =
							data.error.message || "Authentication failed";
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
				authCtx.login(data.idToken,expirationTime.toISOString());
				// console.log(authCtx.token);
				//redirect
				history.replace('/');	
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<section className={classes.auth}>
            
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						ref={passwordInputRef}
						required
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? "Login" : "Create Account"}</button>
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
                        {isLoading && <p>Loading...</p>}
						{isLogin
							? "Create new account"
							: "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
