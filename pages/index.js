import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { COLORS } from "../resources/theme";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: COLORS.background }}
      className="md:px-52 px-2"
    >
      <Head>
        <title>Foiti</title>
        <meta
          name="description"
          content="Foiti is a social media app designed to help users find new places and explore the world like never before."
        />
        <meta property="og:title" content="Foiti" />
        <meta
          property="og:description"
          content="Foiti is a social media app designed to help users find new places and explore the world like never before."
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main>
        <Header />
        {/* BANNER CONTAINER START */}
        <div className="w-full relative">
          <div
            style={{ backgroundColor: COLORS.foitiGrey }}
            className={`w-full h-[23rem]`}
          />
          <div style={{ content: "" }} className="h-32 bg-white" />
          {/* BANNERS */}
          <div className="px-[2rem] absolute w-full top-[4.5rem]">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <img
                  src="/images/banner1.png"
                  height="350"
                  width="200"
                  objectFit="contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/banner2.png"
                  height="400"
                  width="200"
                  objectFit="contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/banner3.png"
                  height="400"
                  width="200"
                  objectFit="contain"
                />
              </div>
            </div>
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
        <div className="flex w-full relative">
          <div
            style={{ backgroundColor: COLORS.foiti }}
            className="w-2/3 p-5 py-10 pr-40 text-white"
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
          <div className="w-1/3 h-full">
            <div
              style={{
                background: COLORS.background,
                borderColor: COLORS.foitiGrey,
              }}
              className="w-[40%] h-[80%] absolute right-0 top-[10%] flex flex-col align-middle justify-center border-2"
            >
              <Image
                src="/images/play-store-logo.png"
                height={70}
                width={200}
                objectFit="contain"
              />
              <p className="text-center">Invite Only</p>
            </div>
          </div>
        </div>
        <div className="py-28">
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
