/* eslint-disable import/prefer-default-export */
import React from "react";
import { Chapter } from "types/chapter";

import chapter1Image from "images/chapter1.jpg";
import chapter2Image from "images/chapter2.jpg";

export const chapters: Chapter[] = [
  {
    id: 0,
    image: chapter1Image,
    chapterNumber: 1,
    title: "Start of the Adventure",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "21 mar",
    status: "available",
    text: (
      <>
        It was the most ordinary spring day. I was sitting in the park playing
        my favorite mobile arcade game. The week of the same and boring quests
        was ending; all I needed was a little time to gather resources. <br />
        <br />
        Well, not just &quot;a little&quot;... 2 more hours. All for the sake of
        exploring a new location with top equipment, the best one available at
        my level. Damn, I was just waiting for this.
        <br />
        <br />
        — Wow!
        <br />
        — What is this?
        <br />
        — Mom, look at these things in the sky!
        <br />
        <br />
        What is the reason they are all yelling about? My phone almost died. Oh
        well, damn! I shift my gaze from the phone screen to the city, and… What
        the hell is this?
      </>
    ),
  },
  {
    id: 1,
    image: chapter2Image,
    chapterNumber: 2,
    title: "Path to Reward",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
    status: "soon",
    text: "",
  },
  {
    id: 2,
    image: chapter2Image,
    chapterNumber: 3,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
    status: "locked",
    text: "",
  },
  {
    id: 3,
    image: chapter1Image,
    chapterNumber: 4,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
    status: "locked",
    text: "",
  },
  {
    id: 5,
    image: chapter2Image,
    chapterNumber: 5,
    title: "REAL-WORLD METAVERSE",
    description:
      "The new AR Game on a real world map with a different Social-Fi and Game-Fi mechanics",
    date: "1 dec",
    status: "locked",
    text: "",
  },
];
