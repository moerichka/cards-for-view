import React from "react";
import Image from "next/image";

import PoliciesLinks from "components/PoliciesLinks";
import ChapterCard from "components/ChapterCard";

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
];

function Cards() {
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
            {chapters.map((chapter) => (
              <ChapterCard
                id={`#chapter${chapter.id}`}
                image={chapter.image}
                title={chapter.title}
                chapterNumber={chapter.chapterNumber}
                date={chapter.date}
                description={chapter.description}
                key={chapter.id}
              />
            ))}
          </div>
          <div className={s.tabs}>
            {chapters.map((chapter) => (
              <div className={s.tab} key={chapter.id}>
                <a href={`#chapter${chapter.id}`} className={s.link}>
                  chapter {chapter.chapterNumber}
                </a>
                {chapter.date && <div className={s.date}>{chapter.date}</div>}
                {chapter.chapterNumber && (
                  <div className={s.chapterNumber}>
                    Chapter {chapter.chapterNumber}
                  </div>
                )}
                {chapter.image && (
                  <div className={s.imageWrapper}>
                    <Image
                      src={chapter.image}
                      alt=""
                      style={{ objectFit: "cover" }}
                      fill
                    />
                  </div>
                )}
                <div className={s.background} />
              </div>
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
