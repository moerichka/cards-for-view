import React, { useRef } from "react";
import Image from "next/image";

import PoliciesLinks from "components/PoliciesLinks";
import ChapterCard from "components/ChapterCard";
import ChapterTab from "components/ChapterTab";

import s from "./cards.module.scss";

const chapters = [
  {
    id: 0,
    image: "/images/chapter1.jpg",
    chapterNumber: 1,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
  },
  {
    id: 1,
    image: "/images/chapter2.jpg",
    chapterNumber: 1,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
  },
  {
    id: 2,
    image: "/images/chapter1.jpg",
    chapterNumber: 1,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
  },
  {
    id: 3,
    image: "/images/chapter2.jpg",
    chapterNumber: 1,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
  },
  {
    id: 5,
    image: "/images/chapter1.jpg",
    chapterNumber: 1,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
  },
];

function Cards() {
  const cardRefArray = useRef<HTMLDivElement[] | null[]>([]);
  console.log("cardRef: ", cardRefArray);

  const onScroll = (indexOfChapter: number) => () => {
    cardRefArray.current[indexOfChapter]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={s.cards}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.header}>
            <div className={s.logoWrapper}>
              <Image
                fill
                src="/images/logoBlue.png"
                alt="Logo"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className={s.titlePart}>
            <div className={s.title}>REAL-WORLD METAVERSE</div>
            <div className={s.description}>
              The new AR Game on a real world map with a different Social-Fi and
              Game-Fi mechanics
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
    </div>
  );
}

export default Cards;
