import React, { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { UserContext } from "context/userContext";

import PoliciesLinks from "components/PoliciesLinks";
import ChapterCard from "components/ChapterCard";
import ChapterTab from "components/ChapterTab";

import { chapters } from "data/chapters";

import s from "./CardsPage.module.scss";

function CardsPage() {
  const router = useRouter();
  const { userEmail } = useContext(UserContext);
  const cardRefArray = useRef<HTMLDivElement[] | null[]>([]);

  const onScroll = (indexOfChapter: number) => () => {
    cardRefArray.current[indexOfChapter]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!userEmail) {
      router.push("/");
    }
  }, [userEmail, router]);

  return (
    <div className={s.cards}>
      <div className={s.grid}>
        <div className={s.header}>
          <div className={s.logoWrapper}>
            <img
              // fill
              src="/images/logoBlue.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
        <div className={s.titlePart}>
          <div className={s.title}>REAL-WORLD METAVERSE</div>
          <div className={s.description}>
            Immerse yourself in the fascinating story about where it all
            started... <br />
            <br /> Each card is a separate part of an interactive story that
            opens the door to future events, NFT, and the MetaTrace app! <br />
            <br /> Hurry up to open the first part!
          </div>
        </div>
        <div className={s.chapters}>
          {chapters.map((chapter, index) => (
            <div
              ref={(elem) => {
                cardRefArray.current[index] = elem;
              }}
              key={chapter.id}
            >
              <ChapterCard chapter={chapter} />
            </div>
          ))}
        </div>
        <div className={s.tabs}>
          {chapters.map((chapter, index) => (
            <button type="button" onClick={onScroll(index)} key={chapter.id}>
              <ChapterTab chapter={chapter} />
            </button>
          ))}
        </div>
        <div className={s.footer}>
          <PoliciesLinks className={s.policies} classNameLink={s.link} />
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
