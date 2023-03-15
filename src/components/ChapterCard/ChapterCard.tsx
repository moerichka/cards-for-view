import React from "react";
import { Link } from "react-router-dom";

import { Chapter } from "types/chapter";

import lockImg from "images/lockWhite.svg";

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
          style={{ objectFit: "cover" }}
          alt=""
          className="fill"
        />
      </div>
      <div className={s.title}>
        {chapter.status === "locked" ? (
          <>
            <div className={s.lockWrapper}>
              <img
                src={lockImg}
                style={{ objectFit: "cover" }}
                alt=""
                className="fill"
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
          to={`/cards/${chapter.id}`}
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
