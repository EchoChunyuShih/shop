import React, { createContext, useState } from "react";

//the actually value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

//the actually component of the context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
