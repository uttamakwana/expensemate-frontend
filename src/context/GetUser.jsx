/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GetUserContext = createContext(null);

const GetUserContextProvider = ({ children }) => {
  const [isGetUser, setIsGetUser] = useState(0);
  return (
    <GetUserContext.Provider value={{ isGetUser, setIsGetUser }}>
      {children}
    </GetUserContext.Provider>
  );
};

export default GetUserContextProvider;
