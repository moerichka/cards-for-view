import React, { useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { UserContext } from "context/userContext";

import ChapterTab from "components/ChapterTab";
import { ButtonLink, ButtonRoute } from "components/Button";

import { chapters } from "data/chapters";

import s from "./CardPage.module.scss";

function CardPage() {
  const router = useRouter();
  const { userEmail } = useContext(UserContext);

  const thisChapter = useMemo(
    () => chapters.find((elem) => elem.id === Number(router.query.cardId)),
    [router],
  );

  useEffect(() => {
    if (!thisChapter) {
      router.push("/cards");
    }

    if (thisChapter?.status !== "available") {
      router.push("/cards");
    }

    if (!userEmail) {
      router.push("/");
    }
  }, [router, thisChapter, userEmail]);

  if (!thisChapter) {
    return null;
  }

  return (
    <div className={s.cardPage}>
      <div className={s.grid}>
        <div className={s.header}>
          <div className={s.logoWrapper}>
            <img
              // fill
              src="/images/logoBlue.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
            <Link href="/cards" className="linkFill" />
          </div>
          <Link href="/cards" className={s.closeButton}>
            <span className={s.line} />
            <span className={s.line} />
          </Link>
        </div>
        <div className={`${s.titlePart} ${s.desktop}`}>
          <div className={s.chapterNumber}>
            Chapter {thisChapter.chapterNumber}
          </div>
          <div className={s.title}>{thisChapter?.title}</div>
        </div>
        <div className={s.chapter}>
          <div className={s.chapterBanner}>
            <div className={s.imageWrapper}>
              <img
                src={thisChapter.image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                // fill
                alt=""
              />
            </div>
            <div className={s.dateWrapper}>
              <div className={s.date}>{thisChapter.date}</div>
            </div>
          </div>
          <div className={s.buttons}>
            <ButtonRoute
              href="/cards"
              className={`${s.button} ${s.noMobile}`}
              variant="blue"
            >
              Back
            </ButtonRoute>
            <ButtonLink href="/" className={s.button}>
              Join
            </ButtonLink>
          </div>
          <div className={`${s.titlePart} ${s.tablet}`}>
            <div className={s.topPart}>
              <div className={s.chapterNumber}>
                Chapter {thisChapter.chapterNumber}
              </div>
              <div className={s.date}>{thisChapter.date}</div>
            </div>
            <div className={s.title}>{thisChapter?.title}</div>
          </div>
          <div className={s.chapterText}>{thisChapter.text}</div>
        </div>
        <div className={s.tabs}>
          {chapters.map((chapter) => (
            <div className={s.tabWrapper} key={chapter.id}>
              <ChapterTab chapter={chapter} />
              {chapter.status === "available" && (
                <Link
                  href={`/cards/${chapter.id}`}
                  className="linkFill"
                  style={{ zIndex: 5 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className={s.footer}>
          <div className={s.buttons}>
            <ButtonRoute href="/cards" className={s.button} variant="blue">
              Back
            </ButtonRoute>
            <ButtonLink href="/" className={s.button}>
              Join
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
