import React from "react";
import Image from "next/image";

import s from "./ChapterCard.module.scss";

interface Props {
  id: string;
  image: string;
  chapterNumber: number;
  title: string;
  description: string;
  date: string;
}

function ChapterCard({
  id,
  image,
  chapterNumber,
  title,
  description,
  date,
}: Props) {
  return (
    <div className={s.chapterCard} id={id}>
      {title && <div className={s.title}>{title}</div>}
      {chapterNumber && (
        <div className={s.chapterNumber}>Chapter {chapterNumber}</div>
      )}
      <div className={s.imageWrapper}>
        <Image src={image} style={{ objectFit: "cover" }} fill alt="" />
      </div>
      {description && <div className={s.description}>{description}</div>}
      {date && (
        <div className={s.dateWrapper}>
          <div className={s.date}>{date}</div>
        </div>
      )}
    </div>
  );
}

export default ChapterCard;
