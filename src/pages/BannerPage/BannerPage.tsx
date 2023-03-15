import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import Loader from "react-loaders";

import { UserContext } from "context/userContext";

import ButtonToInput from "components/ButtonToInput";
import PoliciesLinks from "components/PoliciesLinks";

import cubeImage from "images/cube.png";
import backgroundImage from "images/skyBanner.jpg";
import logoImage from "images/logo.png";

import s from "./BannerPage.module.scss";

const EXPECTED_LOADED_IMAGES_COUNT = 2;

export default function Home() {
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

  return (
    <div className={s.bannerPage}>
      <div className={s.centerContent}>
        <div className={s.logoWrapper}>
          <img
            src={logoImage}
            alt="Logo"
            style={{ objectFit: "contain" }}
            className="fill"
          />
        </div>
        <div className={s.cube}>
          <img
            src={cubeImage}
            alt=""
            style={{ objectFit: "contain" }}
            onLoad={incrementLoadedImagesCount}
            className="fill"
          />
        </div>
        <ButtonToInput />
      </div>
      <div className={s.footer}>
        <PoliciesLinks />
      </div>
      <div className={s.background}>
        <img
          src={backgroundImage}
          style={{ objectFit: "cover" }}
          alt=""
          onLoad={incrementLoadedImagesCount}
          className="fill"
        />
      </div>
      <div className={loadingClassName}>
        <div className={s.loaderWrapper}>
          <Loader type="line-scale-pulse-out-rapid" active />
        </div>
      </div>
    </div>
  );
}
