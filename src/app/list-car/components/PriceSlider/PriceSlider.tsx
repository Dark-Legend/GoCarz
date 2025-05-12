"use client";

import { Slider } from "@/components/common/Slider/slider";
import React from "react";
import { getListStateStore, setListCarStore } from "@/app/list-car/store";

export const PriceSlider: React.FC = () => {
  const { priceRange } = getListStateStore((s) => s);

  const handlePriceRange = (e: number[]) => {
    setListCarStore((state) => {
      state.priceRange = e;
    });
  };
  return (
    <div className="grid grid-cols-1 gap-3 p-2">
      <div>
        <p className="p-0 m-0 font-medium">Price Range</p>
        <p>$ {priceRange}</p>
      </div>
      <Slider
        min={10000}
        max={100000}
        defaultValue={[10000]}
        onValueChange={handlePriceRange}
      />
      <div className="flex justify-between items-center">
        <p className="font-medium">$10000</p>
        <p className="font-medium">$100000</p>
      </div>
    </div>
  );
};
