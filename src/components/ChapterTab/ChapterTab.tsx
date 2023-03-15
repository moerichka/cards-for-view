import React from "react";

import { Chapter } from "types/chapter";

import lockImg from "images/lockWhite.svg";

import s from "./ChapterTab.module.scss";

interface Props {
  chapter: Chapter;
}

function ChapterTab({ chapter }: Props) {
  return (
    <div className={s.tab}>
      {chapter.status === "available" && (
        <div className={s.date}>{chapter.date}</div>
      )}
      {chapter.status === "soon" && <div className={s.date}>Soon</div>}
      {chapter.status === "locked" && (
        <div className={s.date}>
          <img
            src={lockImg}
            width={22.5}
            height={30}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      )}
      {chapter.chapterNumber && chapter.status !== "locked" && (
        <div className={s.chapterNumber}>Chapter {chapter.chapterNumber}</div>
      )}
      {chapter.image && chapter.status === "available" && (
        <>
          <div className={s.imageWrapper}>
            <img
              src={chapter.image}
              alt=""
              style={{ objectFit: "cover" }}
              className="fill"
            />
          </div>
          <div className={s.background} />
        </>
      )}
      {chapter.status !== "available" && <div className={s.backgroundMatte} />}
    </div>
  );
}

export default ChapterTab;
