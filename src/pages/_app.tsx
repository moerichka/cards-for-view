/* eslint-disable react/jsx-props-no-spreading */
import "styles/main.scss";
import type { AppProps } from "next/app";

import HeightSetter from "components/HeightSetter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <HeightSetter />
    </>
  );
}
