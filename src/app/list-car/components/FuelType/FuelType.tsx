"use client";

import { Chip } from "@/components/common/Chip/Chip";
import React from "react";
import { getListStateStore, setListCarStore } from "../../store";

const fuelTypeList: string[] = ["Diesel", "Petrol", "Electric", "Hybrid"];

export const FuelType: React.FC = () => {
  const { fuelType } = getListStateStore((s) => s);

  const handleBodyType = (type: string) => {
    setListCarStore((state) => {
      if (state.fuelType === type) {
        state.fuelType = "";
      } else {
        state.fuelType = type;
      }
    });
  };
  return (
    <section className="grid grid-cols-1 gap-3 mt-2 p-2">
      <p className="font-medium">Fuel Type</p>
      <div className="flex items-center gap-2.5 flex-wrap">
        {fuelTypeList?.map((fuel, i) => (
          <Chip
            make={fuel}
            key={i}
            onClick={() => handleBodyType(fuel)}
            isActive={fuel === fuelType}
          />
        ))}
      </div>
    </section>
  );
};
