import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlider = () => {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showIndicators={true}
      interval={5000}
    >
      <div>
        <Image
          src="/images/banner1.png"
          height="400"
          width="300"
          objectFit="contain"
          alt="Foiti app explore screenshot"
          className="block w-full"
        />
      </div>
      <div>
        <Image
          src="/images/banner2.png"
          height="400"
          width="300"
          objectFit="contain"
          alt="Foiti app explore screenshot"
          className="block w-full"
        />
      </div>
      <div>
        <Image
          src="/images/banner3.png"
          height="400"
          width="300"
          objectFit="contain"
          alt="Foiti app explore screenshot"
          className="block w-full"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default HomeSlider;
