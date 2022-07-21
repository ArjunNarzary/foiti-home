import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "../resources/theme";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center pb-[4rem] px-5 md:px-0">
      <div className="flex justify-center">
        <Link href="/" className="cursor-pointer">
          <Image
            className="cursor-pointer"
            src="/images/foiti-round.png"
            height={100}
            width={100}
            objectFit="contain"
            alt="Foiti icon"
          />
        </Link>
      </div>
      <h1
        style={{ color: COLORS.foitiGrey }}
        className="text-center font-bold text-3xl mb-8"
      >
        #ExploreWithFoiti
      </h1>
      <div className="flex justify-center py-5 gap-5">
        <a href="mailto:support@foiti.com">
          <Image
            src="/images/email.png"
            height={35}
            width={35}
            objectFit="contain"
            alt="Email Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/FoitiOfficial"
          rel="noreferrer"
        >
          <Image
            src="/images/twitter.png"
            height={35}
            width={35}
            objectFit="contain"
            alt="Twitter Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/foitiofficial/"
          rel="noreferrer"
        >
          <Image
            src="/images/instagram.png"
            height={35}
            width={35}
            objectFit="contain"
            alt="Instagram Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/FoitiOfficial/"
          rel="noreferrer"
        >
          <Image
            src="/images/facebook.png"
            height={35}
            width={35}
            objectFit="contain"
            alt="Facebook Icon"
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
