/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";
import HeightSetter from "components/HeightSetter";
import { SnackbarProvider } from "notistack";
import SnackBar from "components/SnackBar";
import TransitionEffect from "components/TransitionEffect";

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
export default function App({ Component, pageProps }: AppProps) {
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
      autoHideDuration={1500}
    >
      <UserContext.Provider value={contextValue}>
        <TransitionEffect>
          <Component {...pageProps} />
        </TransitionEffect>
        <HeightSetter />
      </UserContext.Provider>
    </SnackbarProvider>
  );
}
