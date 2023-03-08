import React from "react";
import Image from "next/image";

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
        <Image src={chapter.image} style={{ objectFit: "cover" }} fill alt="" />
      </div>
      <div className={s.title}>
        {chapter.status === "locked" ? (
          <>
            <Image
              src="/images/lockWhite.svg"
              style={{ objectFit: "cover" }}
              width={30}
              height={40}
              alt=""
            />
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
      {chapter.status === "soon" && <div className={s.backgroundBlur} />}
      {chapter.status === "locked" && <div className={s.backgroundMatte} />}
    </div>
  );
}

export default ChapterCard;
