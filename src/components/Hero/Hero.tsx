import React from "react";
import { Title } from "@/components/common/Title/Title";
import { Input } from "@/components/common/Input/input";
// import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center flex-col h-96 bg-heroBgColor p-2.5 gap-3">
      <Title className="text-5xl text-primaryTextColor">
        Looking for a New Ride?
      </Title>
      <p className="p-0 m-0 font-medium text-2xl text-secondaryTextColor">
        Start You Search Here!
      </p>
      <div className="w-full flex justify-center ">
        <Input
          className="outline-0 border-2 border-btnColor w-2xl h-12 rounded-4xl relative"
          placeholder="Enter make "
        />
        {/* <Image
          src={"./search.svg"}
          alt="search icon"
          width={30}
          height={30}
          className="absolute right-80 top-2.5"
        /> */}
      </div>
    </section>
  );
};
