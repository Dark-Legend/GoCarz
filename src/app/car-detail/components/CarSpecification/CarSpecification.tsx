"use client";

import React, { useMemo } from "react";
import { Title } from "@/components/common/Title/Title";
import { getCarDetailStore } from "../../store";

export const CarSpecification: React.FC = () => {
  const { carDetails } = getCarDetailStore((s) => s);
  const filteredCarDetails = useMemo(() => {
    const {
      title,
      make,
      model,
      year,
      kilometersDrive,
      fuelType,
      transmission,
      owner,
      color,
    } = carDetails?.[0] || {};
    const filteredData = {
      title,
      make,
      model,
      year,
      kilometersDrive,
      fuelType,
      transmission,
      owner,
      color,
    };

    return filteredData;
  }, [carDetails]);
  console.log(filteredCarDetails, "DATA");
  return (
    <section className="flex flex-col gap-5">
      <Title>Specifications</Title>
      <section className="bg-gray-50 p-3 grid grid-cols-2 gap-5">
        {Object.entries(filteredCarDetails)?.map(([key, value], i) => {
          console.log(key, value);
          return (
            <div className="flex flex-col gap-2" key={i}>
              <div className="flex justify-between items-center border border-solid border-gray-200 border-l-0 border-r-0 border-t-0 px-1 py-3">
                <p className="text-primaryTextColor font-semibold capitalize">
                  {key}
                </p>
                <p className="text-secondaryTextColor font-semibold">{value}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
