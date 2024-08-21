"use client";

import { MDXRemote } from "next-mdx-remote";
import HeroImage from "./HeroImage";
import RoundedImage from "./RoundedImage";
import H1 from "./elements/H1";
import Ol from "./elements/Ol";
import P from "./elements/P";
import Spacer from "./Spacer";
import H3 from "./elements/H3";
import A from "./elements/A";
import Pre from "./elements/Pre";
import AnimeRatingCard from "../ui/AnimeRatingCard";
import Closing from "./Closing";

export default function MDXRenderer({ source }: { source: any }) {
  return (
    <article className="text-grey-050">
      <MDXRemote
        suppressHydrationWarning
        {...source}
        components={{
          HeroImage,
          Spacer,
          RoundedImage,
          AnimeRatingCard,
          Closing,
          h1: H1,
          h3: H3,
          a: A,
          ol: Ol,
          p: P,
          pre: Pre,
        }}
      />
    </article>
  );
}
