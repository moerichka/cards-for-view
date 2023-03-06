/* eslint-disable import/prefer-default-export */
import React, { createContext } from "react";

interface ContextValue {
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<ContextValue>({
  userEmail: "",
  setUserEmail: () => {},
});
