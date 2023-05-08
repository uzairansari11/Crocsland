import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
	const [apiData, setApiData] = useState({
		data: null,
	});

	return (
		<ApiContext.Provider value={{ apiData, setApiData }}>
			{" "}
			{children}
		</ApiContext.Provider>
	);
};
