import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import s from "styles/home.module.scss";

import cubeImage from "../../public/images/cube.png";
import backgroundImage from "../../public/images/skyBanner.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.bannerPage}>
        <div className={s.centerContent}>
          <div className={s.logoWrapper}>
            <Image
              fill
              src="/images/logo.png"
              alt="sky-banner"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={s.cube}>
            <Image
              fill
              src={cubeImage}
              alt="sky-banner"
              style={{ objectFit: "contain" }}
              placeholder="blur"
              quality={100}
            />
          </div>
          <div className={s.button}>
            <div className={s.front}>
              <span className={s.buttonText}>Explore</span>
            </div>
            <div className={s.back}>
              <div className={s.lock}>
                <Image fill src="/images/lock.svg" alt="lock" />
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
            alt="sky-banner"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
