import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "../resources/theme";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center pb-[4rem]">
      <a href="/">
        <img
          src="/images/foiti-round.png"
          height={100}
          width={100}
          objectFit="contain"
          className="my-0 mx-auto"
        />
      </a>
      <h1
        style={{ color: COLORS.foitiGrey }}
        className="text-center font-bold text-3xl"
      >
        #ExploreWithFoiti
      </h1>
      <div className="flex justify-center py-5 gap-4">
        <a href="mailto:support@foiti.com">
          <img
            src="/images/email.png"
            height={30}
            width={30}
            objectFit="contain"
          />
        </a>
        <a target="_blank" href="https://twitter.com/FoitiOfficial">
          <img
            src="/images/twitter.png"
            height={30}
            width={30}
            objectFit="contain"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/foitiofficial/">
          <img
            src="/images/instagram.png"
            height={30}
            width={30}
            objectFit="contain"
          />
        </a>
        <a target="_blank" href="https://www.facebook.com/FoitiOfficial/">
          <img
            src="/images/facebook.png"
            height={30}
            width={30}
            objectFit="contain"
          />
        </a>
      </div>
      <div
        style={{ color: COLORS.foitiGrey }}
        className="font-bold text-center text-sm"
      >
        Copyright @ 2022 Foiti - <Link href="/terms-of-use">Terms of Use</Link>{" "}
        - <Link href="/community-guidelines">Community Guidelines</Link> -{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
};
