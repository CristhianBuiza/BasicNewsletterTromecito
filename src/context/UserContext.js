import React, { useState } from "react";
const Context = React.createContext();
export function UserContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Context.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
