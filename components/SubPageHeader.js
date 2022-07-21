import React from "react";
import { COLORS } from "../resources/theme";
import Header from "./Header";

const SubPageHeader = ({ title }) => {
  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: COLORS.foitiGrey, alignItems: "center" }}
        className="w-full md:h-[12rem] h-[8rem] flex justify-center"
      >
        <h1 className="align-middle text-white md:text-4xl text-2xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubPageHeader;
