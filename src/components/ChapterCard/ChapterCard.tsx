import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Chapter } from "types/chapter";

import s from "./ChapterCard.module.scss";

interface Props {
  chapter: Chapter;
}

function ChapterCard({ chapter }: Props) {
  return (
    <div className={s.chapterCard} id={`${chapter.id}`}>
      {chapter.chapterNumber && (
        <div className={s.chapterNumber}>Chapter {chapter.chapterNumber}</div>
      )}
      <div className={s.imageWrapper}>
        <img
          src={chapter.image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className={s.title}>
        {chapter.status === "locked" ? (
          <>
            <div className={s.lockWrapper}>
              <img
                src="/images/lockWhite.svg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            <span>locked</span>
          </>
        ) : (
          chapter.title
        )}
      </div>
      <div className={s.dateWrapper}>
        <div className={s.date}>
          {chapter.status === "available" ? chapter.date : "soon"}
        </div>
      </div>
      {chapter.status === "available" && (
        <Link
          href={`/cards/${chapter.id}`}
          className="linkFill"
          style={{ zIndex: 5 }}
        />
      )}
      {chapter.status === "soon" && <div className={s.backgroundBlur} />}
      {chapter.status === "locked" && <div className={s.backgroundMatte} />}
    </div>
  );
}

export default ChapterCard;
