import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children}) => ( 
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

//how we use inside component
export const useStateValue = () => useContext(StateContext);