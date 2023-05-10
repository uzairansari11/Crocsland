import React from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const userAuthorized = JSON.parse(localStorage.getItem("isAuthUse")) || false;
	const userName = localStorage.getItem("name") || null;
	const [authentification, setAuthentification] = useState({
		isAuth: userAuthorized || false,
		name: userName || null,
	});

	const login = () => {
		setAuthentification({
			...authentification,
			isAuth: userAuthorized,
			name: userName,
		});
	};
	const logout = () => {
		setAuthentification({
			...authentification,
			isAuth: userAuthorized,
			name: userName,
		});
	};
	return (
		<AuthContext.Provider value={{ authentification, login, logout }}>
			{" "}
			{children}
		</AuthContext.Provider>
	);
};
