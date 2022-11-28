import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import { COLORS } from "../resources/theme";
import React from "react";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: COLORS.background }}
      className="md:px-20 lg:px-52"
    >
      <Head>
        <title>Foiti</title>
        <link rel="icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Foiti is a social media app designed to help users find new places and explore the world like never before."
        />
        <meta property="og:title" content="Foiti" />
        <meta
          property="og:description"
          content="Foiti is a social media app designed to help users find new places and explore the world like never before."
        />
        <meta property="og:image" content="https://foiti-tools.s3.ap-south-1.amazonaws.com/foiti-icon.jpg" />

      </Head>

      <main>
        <Header />
        {/* BANNER CONTAINER START */}
        <div className="w-full relative">
          <div
            style={{ backgroundColor: COLORS.foitiGrey }}
            className={`w-full md:h-[23rem] h-[32rem]`}
          />
          <div
            style={{ content: "" }}
            className="h-32 bg-white md:block hidden"
          />
          {/* BANNERS */}
          <div className="px-[2rem] absolute w-full top-[4.5rem] md:block hidden">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <Image
                  src="/images/banner1.png"
                  height="400"
                  width="300"
                  objectFit="contain"
                  alt="Foiti app user screenshot"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/banner2.png"
                  height="400"
                  width="300"
                  objectFit="contain"
                  alt="Foiti app explore screenshot"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/banner3.png"
                  height="400"
                  width="300"
                  objectFit="contain"
                  alt="Foiti app post screenshot"
                />
              </div>
            </div>
          </div>

          {/* BANNER FOR SMALLER SCREEN */}
          <div className="px-[2rem] absolute w-full top-[4.5rem] md:hidden">
            <HomeSlider />
          </div>
        </div>
        {/* BANNER CONTAINER END */}
        <div className="py-16">
          <h1
            style={{ color: COLORS.foitiGrey }}
            className="text-center text-4xl font-bold"
          >
            #ExploreWithFoiti
          </h1>
        </div>
        <div className="md:flex w-full relative">
          <div
            style={{ backgroundColor: COLORS.foiti }}
            className="md:w-2/3 w-full p-5 py-10 md:pr-40 text-white block"
          >
            <p className="text-lg">
              When it comes to travelling what we just need is Place, Food &
              Accomodation. But, finding these is hard, even if you live in the
              world of social media.
            </p>
            <p className="mt-5 text-lg">
              Foiti is the solution to this problem. With Foiti, you can explore
              places like it’s suppose to be in this digital age.
            </p>
          </div>
          <div className="md:w-1/3 w-full md:h-full block pt-16 md:pt-0">
            <div
              style={{
                background: COLORS.background,
                borderColor: COLORS.foitiGrey,
              }}
              className="md:w-[40%] md:h-[80%] md:absolute md:right-0 md:top-[10%] py-5 md:py-0 flex flex-col align-middle justify-center md:border-2"
            >
              <div className="text-center">
                <a href="intent://#Intent;scheme=foiti;package=com.foiti.android;end">
                  {/* <a href="https://play.google.com/store/apps/details?id=com.foiti.android"> */}
                  <Image
                    className="cursor-pointer"
                    src="/images/play-store-logo.png"
                    height={70}
                    width={200}
                    objectFit="contain"
                    alt="Get foiti app on google play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-28 px-5">
          <p className="text-center font-bold py-1">
            CONNECT WITH OTHER TRAVELLERS
          </p>
          <p className="text-center font-bold py-1">
            GET EXACT COORDINATES OF THE PLACE, WHERE THE PHOTO WAS TAKEN
          </p>
          <p className="text-center font-bold py-1">
            FIND PLACES YOU HAVE NEVER VISITED
          </p>
          <p className="text-center font-bold py-1">
            TRAVEL GUIDES CONTRIBUTED BY HUNDREDS OF TRAVELLERS
          </p>
          <p className="text-center font-bold py-1">
            READ GENUINE REVEWS AND RATINGS OF PLACES
          </p>
          <p className="text-center font-bold py-1">AND MUCH MORE...</p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
