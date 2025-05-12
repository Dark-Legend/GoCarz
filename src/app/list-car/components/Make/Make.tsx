"use client";

import { Chip } from "@/components/common/Chip/Chip";
import React from "react";
import { getListStateStore, setListCarStore } from "../../store";

const carMakeList = [
  "BMW",
  "Mahindra",
  "Tata",
  "Maruti",
  "Kia",
  "Mercedes",
  "Hyundai",
];

export const Make: React.FC = () => {
  const { make: carMake } = getListStateStore((s) => s);

  const handleMake = (car: string) => {
    setListCarStore((state) => {
      if (state.make === car) {
        console.log("THIS is getting rendered");
        state.make = "";
      } else {
        state.make = car;
      }
    });
  };

  return (
    <section className="grid grid-cols-1 gap-3 mt-2 p-2">
      <p className="font-medium">Make</p>
      <div className="flex items-center flex-wrap gap-2.5">
        {carMakeList?.map((make, i) => (
          <Chip
            make={make}
            key={i}
            isActive={carMake === make}
            onClick={() => handleMake(make)}
          />
        ))}
      </div>
    </section>
  );
};
