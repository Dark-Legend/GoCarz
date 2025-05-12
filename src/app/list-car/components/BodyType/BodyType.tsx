"use client";

import { Chip } from "@/components/common/Chip/Chip";
import React from "react";
import { getListStateStore, setListCarStore } from "@/app/list-car/store";

const bodyTypeList: string[] = ["Coupe", "Hatchback", "Sedan", "SUV"];

export const BodyType: React.FC = () => {
  const { bodyType } = getListStateStore((s) => s);

  const handleBodyType = (type: string) => {
    setListCarStore((state) => {
      if (state.bodyType === type) {
        state.bodyType = "";
      } else {
        state.bodyType = type;
      }
    });
  };
  return (
    <section className="grid grid-cols-1 gap-3 mt-2 p-2">
      <p className="font-medium">Body Type</p>
      <div className="flex items-center gap-2.5 flex-wrap">
        {bodyTypeList?.map((body, i) => (
          <Chip
            make={body}
            key={i}
            onClick={() => handleBodyType(body)}
            isActive={body === bodyType}
          />
        ))}
      </div>
    </section>
  );
};
