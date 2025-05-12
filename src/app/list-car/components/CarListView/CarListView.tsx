"use client";

import React from "react";
import { useGetListOfCars } from "@/app/list-car/queries/queries";
import { CarCard } from "@/components/Feature/CarCard";

type CarListViewProps = {
  userId: string;
};

export const CarListView: React.FC<CarListViewProps> = ({ userId }) => {
  const { data } = useGetListOfCars();

  console.log(data, "DATA");
  return (
    <section
      className="grid grid-cols-3 p-5 gap-5 overflow-y-auto"
      style={{
        height: "calc(100vh - 120px)",
      }}
    >
      {data?.map((carData, i) => (
        <CarCard key={i} {...carData} clerkId={userId} carId={carData?._id} />
      ))}
    </section>
  );
};
