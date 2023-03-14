import React, { useContext, useMemo } from "react";
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

  if (!thisChapter) {
    return (
      <div className={s.cardPage}>
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
                <Link href="/cards" className="linkFill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (thisChapter.status !== "available") {
    router.push("/cards");
    return <div className={s.cardPage} />;
  }

  if (!userEmail) {
    router.push("/");
    return <div className={s.cardPage} />;
  }

  return (
    <div className={s.cardPage}>
      <div className={s.grid}>
        <div className={s.header}>
          <div className={s.logoWrapper}>
            <Image
              fill
              src="/images/logoBlue.png"
              alt="Logo"
              style={{ objectFit: "contain" }}
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
              <Image
                src={thisChapter.image}
                style={{ objectFit: "cover" }}
                fill
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
