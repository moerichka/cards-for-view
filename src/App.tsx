import React, { useEffect, useState, useMemo } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

import { UserContext } from "context/userContext";
import HeightSetter from "components/HeightSetter";
import SnackBar from "components/SnackBar";
import Router from "./Router";

import "styles/main.scss";

declare module "notistack" {
  interface VariantOverrides {
    trace: {
      customTitle?: React.ReactNode;
      customMessage?: React.ReactNode;
      type?: "error" | "default";
    };
  }
}
function App() {
  const [userEmail, setUserEmail] = useState("");

  const contextValue = useMemo(
    () => ({
      userEmail,
      setUserEmail,
    }),
    [userEmail],
  );

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail") || "");
  }, []);

  return (
    <SnackbarProvider
      Components={{
        trace: SnackBar,
      }}
      autoHideDuration={2000}
    >
      <UserContext.Provider value={contextValue}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <HeightSetter />
      </UserContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
