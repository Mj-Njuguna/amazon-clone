import React, {createContext, useContext, useReducer} from "react"

//preps the data layer 
export const StateContext = createContext();

//wraps our app and provides the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
     {children}
     </StateContext.Provider>
);

// allows us to pull information the data layer
export const useStateValue = () => useContext(StateContext);