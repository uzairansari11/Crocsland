import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const cartQuantityContext = createContext();

export const CartQunatityContextProvider = ({ children }) => {
 useEffect(() => {
  axios.get("https://crabby-culottes-ant.cyclic.app/cart").then((response) => {
   // handle success
   console.log(response.data);
   setItem(response.data.length);
  });
 }, []);

 const [item, setItem] = useState();
 const totalItem = (value) => {
  setItem(item + value);
 };

 return (
  <cartQuantityContext.Provider value={{ totalItem, item }}>
   {children}
  </cartQuantityContext.Provider>
 );
};
