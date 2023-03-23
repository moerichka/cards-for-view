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
import checkImage from "images/check.svg";

import s from "./BannerPage.module.scss";

const EXPECTED_LOADED_IMAGES_COUNT = 2;

export default function Home() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState<number>(0);
  const [isHiding, setIsHiding] = useState<boolean>(false);

  const [isOpenInput, setIsOpenInput] = useState<boolean>(false);

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

  const onCheckBoxChange = () => {
    setIsTermsChecked((prev) => !prev);
  };

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
        <div className={s.buttonPanel}>
          <ButtonToInput
            isOpen={isOpenInput}
            setIsOpen={setIsOpenInput}
            isTermsChecked={isTermsChecked}
          />
          <div
            className={`${s.termsOfUseWrapper} ${isOpenInput ? s.shown : ""}`}
          >
            <button
              type="button"
              onClick={onCheckBoxChange}
              className={s.checkbox}
            >
              <img
                src={checkImage}
                alt=""
                className={`${s.check} ${isTermsChecked ? s.active : ""}`}
              />
            </button>
            <div className={s.termsOfUse}>
              By leaving your email address, you agree to our service&apos;s{" "}
              <a
                href="https://mixr.gitbook.io/en/mixr/legal/privacy"
                className={s.link}
              >
                Privacy policy
              </a>{" "}
              and{" "}
              <a
                href="https://mixr.gitbook.io/ru/mixr/legal/terms"
                className={s.link}
              >
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={s.footer}>
        <PoliciesLinks />
      </div> */}
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
