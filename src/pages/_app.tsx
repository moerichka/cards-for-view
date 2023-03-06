/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useState } from "react";
import type { AppProps } from "next/app";

import { UserContext } from "context/userContext";
import HeightSetter from "components/HeightSetter";

import "styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [userEmail, setUserEmail] = useState("");

  const contextValue = useMemo(
    () => ({
      userEmail,
      setUserEmail,
    }),
    [userEmail],
  );

  return (
    <UserContext.Provider value={contextValue}>
      <Component {...pageProps} />
      <HeightSetter />
    </UserContext.Provider>
  );
}
