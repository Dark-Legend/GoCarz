"use client";

import { Chip } from "@/components/common/Chip/Chip";
import React from "react";
import { getListStateStore, setListCarStore } from "../../store";

const transmissionList: string[] = ["Automatic", "Manual", "Semi-Automatic"];

export const Transmission: React.FC = () => {
  const { transmission: transmissionType } = getListStateStore((s) => s);

  const handleBodyType = (type: string) => {
    setListCarStore((state) => {
      if (state.transmission === type) {
        state.transmission = "";
      } else {
        state.transmission = type;
      }
    });
  };
  return (
    <section className="grid grid-cols-1 gap-3 mt-2 p-2">
      <p className="font-medium">Fuel Type</p>
      <div className="flex items-center gap-2.5 flex-wrap">
        {transmissionList?.map((transmission, i) => (
          <Chip
            make={transmission}
            key={i}
            onClick={() => handleBodyType(transmission)}
            isActive={transmission === transmissionType}
          />
        ))}
      </div>
    </section>
  );
};
