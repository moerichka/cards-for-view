import { ReactNode } from "react";

export interface Chapter {
  id: number;
  image: string;
  chapterNumber: number;
  title: string;
  description: string;
  text: string | ReactNode;
  date: string;
  status: "locked" | "soon" | "available";
}
