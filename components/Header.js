import Image from "next/image";
import Link from "next/link";
import React from "react";
import { COLORS } from "../resources/theme";

function Header() {
  return (
    <div className="w-full flex justify-center md:h-40 h-20 relative">
      <Link href="/">
        <div
          style={{ borderColor: COLORS.foitiGrey }}
          className="w-1/3 border-2 flex justify-center py-4 md:h-28 h-18 bg-white absolute bottom-[-2rem] z-10 cursor-pointer"
        >
          <Image
            src="/images/foiti.png"
            className="object-contain object-center"
            alt="Foiti Logo"
            height={30}
            width={120}
            objectfit="contain"
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
