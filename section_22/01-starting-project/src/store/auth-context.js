import React, { useState, useEffect, useCallback } from "react";
const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});
let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingTime = adjExpirationTime - currentTime;
	return remainingTime;
};

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	const storedExpirationTime = localStorage.getItem("expirationTime");

	const remainingTime = calculateRemainingTime(storedExpirationTime);
	if (remainingTime <= 0) {
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
	}
	return { token: storedToken, expirationTime: remainingTime };
};

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken();

	let initialToken;
	if (tokenData.token) {
		initialToken = tokenData.token;
	}

	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	});
	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem("token", token);
		localStorage.setItem("expirationTime", expirationTime);

		const remainingTime = calculateRemainingTime(expirationTime);
		logoutTimer = setTimeout(logoutHandler, remainingTime);
	};

	useEffect(() => {
		if (tokenData.token) {
			console.log(tokenData);
			logoutTimer = setTimeout(logoutHandler, tokenData.expirationTime);
		}
	}, [tokenData, logoutHandler]);

	const ContextValue = {
		token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={ContextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
