import React from "react";
import Image from "next/image";

import { Chapter } from "types/chapter";

import s from "./ChapterTab.module.scss";

interface Props {
  chapter: Chapter;
}

function ChapterTab({ chapter }: Props) {
  return (
    <div className={s.tab}>
      {chapter.date && <div className={s.date}>{chapter.date}</div>}
      {chapter.chapterNumber && (
        <div className={s.chapterNumber}>Chapter {chapter.chapterNumber}</div>
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
  );
}

export default ChapterTab;
