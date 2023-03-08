import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import ChapterTab from "components/ChapterTab";
import { ButtonLink, ButtonRoute } from "components/Button";

import { chapters } from "data/chapters";

import s from "./CardPage.module.scss";

function CardPage() {
  const router = useRouter();

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
          <div className={s.titlePart}>
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
    </div>
  );
}

export default CardPage;
