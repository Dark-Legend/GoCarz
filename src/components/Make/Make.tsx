import React from "react";
import { Card } from "@/components/common/Card/card";
import { carMakeDetails } from "./constant";
import { Title } from "@/components/common/Title/Title";

export const Make: React.FC = () => {
  return (
    <section className="flex flex-col mt-14 gap-5 p-3">
      <div className="flex justify-between items-center">
        <Title>Browse by Make</Title>
        <div className="flex justify-between items-center gap-3 cursor-pointer">
          <p className="font-medium">View Alll</p>
          <img src="/arrowRight.svg" alt="arrow icon" width={20} height={20} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        {carMakeDetails?.map((make, i) => (
          <Card
            key={i}
            className="bg-white shadow w-40 h-40 flex flex-col justify-center items-center cursor-pointer"
          >
            <img src={make.img} alt="make icon" width={70} height={70} />
            <p className="font-medium text-lg">{make.make}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
