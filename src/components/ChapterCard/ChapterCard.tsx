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
      {chapter.title && <div className={s.title}>{chapter.title}</div>}
      {chapter.chapterNumber && (
        <div className={s.chapterNumber}>Chapter {chapter.chapterNumber}</div>
      )}
      <div className={s.imageWrapper}>
        <Image src={chapter.image} style={{ objectFit: "cover" }} fill alt="" />
      </div>
      {chapter.description && (
        <div className={s.description}>{chapter.description}</div>
      )}
      {chapter.date && (
        <div className={s.dateWrapper}>
          <div className={s.date}>{chapter.date}</div>
        </div>
      )}
    </div>
  );
}

export default ChapterCard;
