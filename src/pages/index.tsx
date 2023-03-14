import { useState, useCallback, useMemo, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "react-loaders";

import { UserContext } from "context/userContext";

import ButtonToInput from "components/ButtonToInput";
import PoliciesLinks from "components/PoliciesLinks";

import s from "styles/home.module.scss";

import cubeImage from "../../public/images/cube.png";
import backgroundImage from "../../public/images/skyBanner.jpg";


const EXPECTED_LOADED_IMAGES_COUNT = 2;

export default function Home() {
  const router = useRouter();
  const { userEmail } = useContext(UserContext);
  const [loadedImagesCount, setLoadedImagesCount] = useState<number>(0);
  const [isHiding, setIsHiding] = useState<boolean>(false);

  const incrementLoadedImagesCount = useCallback(
    () => setLoadedImagesCount((i) => i + 1),
    [],
  );

  const isAllImagesLoaded = loadedImagesCount === EXPECTED_LOADED_IMAGES_COUNT;

  useEffect(() => {
    if (isAllImagesLoaded) {
      setIsHiding(true);
      setTimeout(() => {
        setIsHiding(false);
      }, 300);
    }
  }, [isAllImagesLoaded]);

  const loadingClassName = useMemo(
    () =>
      `${s.loadingStub} ${isAllImagesLoaded ? s.hidden : ""} ${
        isHiding ? s.hiding : ""
      }`,
    [isAllImagesLoaded, isHiding],
  );

  if (userEmail) {
    router.push("/cards");
    return <div className={s.bannerPage} />;
  }

  return (
    <>
      <Head>
        <title>Meta Trace — AR play-and-earn Metaverse in your phone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#499EDD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.bannerPage}>
        <div className={s.centerContent}>
          <div className={s.logoWrapper}>
            <Image
              fill
              src="/images/logo.png"
              alt="Logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={s.cube}>
            <Image
              fill
              src={cubeImage}
              alt=""
              style={{ objectFit: "contain" }}
              quality={100}
              onLoad={incrementLoadedImagesCount}
            />
          </div>
          <ButtonToInput />
        </div>
        <div className={s.footer}>
          <PoliciesLinks />
        </div>
        <div className={s.background}>
          <Image
            fill
            src={backgroundImage}
            quality={100}
            style={{ objectFit: "cover" }}
            alt=""
            onLoad={incrementLoadedImagesCount}
          />
        </div>
        <div className={loadingClassName}>
          <div className={s.loaderWrapper}>
            <Loader type="line-scale-pulse-out-rapid" active />
          </div>
        </div>
      </div>
    </>
  );
}
