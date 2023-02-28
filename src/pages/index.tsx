import { useState, useCallback, useMemo, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Loader from "react-loaders";

import s from "styles/home.module.scss";

import cubeImage from "../../public/images/cube.png";
import backgroundImage from "../../public/images/skyBanner.jpg";

const EXPECTED_LOADED_IMAGES_COUNT = 2;

export default function Home() {
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
      `${s.loadingStub} ${isAllImagesLoaded ? s.hidden : ""} ${isHiding ? s.hiding : ""
      }`,
    [isAllImagesLoaded, isHiding],
  );

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
          <div className={s.button}>
            <div className={s.front}>
              <span className={s.buttonText}>Explore</span>
            </div>
            <div className={s.back}>
              <div className={s.lock}>
                <Image fill src="/images/lock.svg" alt="" />
              </div>
              <span className={s.buttonText}>Locked</span>
            </div>
          </div>
        </div>
        <div className={s.footer}>
          <a
            href="https://mixr.gitbook.io/ru/mixr/legal/terms"
            className={s.link}
          >
            Terms of use
          </a>
          <a
            href="https://mixr.gitbook.io/en/mixr/legal/cookie"
            className={s.link}
          >
            Сookie policy
          </a>
          <a
            href="https://mixr.gitbook.io/en/mixr/legal/privacy"
            className={s.link}
          >
            Privacy policy
          </a>
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
