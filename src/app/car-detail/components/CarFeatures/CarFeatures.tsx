"use client";

import React from "react";
import { Title } from "@/components/common/Title/Title";
import { Dot } from "lucide-react";
import { getCarDetailStore } from "@/app/car-detail/store";

export const CarFeatures: React.FC = () => {
  const { carDetails } = getCarDetailStore((s) => s);
  console.log(carDetails);
  return (
    <section className="flex justify-between items-stretch">
      <div className="flex-1 flex flex-col gap-5">
        <Title>Description</Title>
        <p className="text-primaryTextColor text-lg">
          {carDetails?.[0]?.description}
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <Title>Features</Title>
        <div>
          {carDetails?.[0]?.features?.map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-1 text-medium text-primaryTextColor text-lg"
            >
              <Dot size={40} color="#007aff" />
              {feat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
