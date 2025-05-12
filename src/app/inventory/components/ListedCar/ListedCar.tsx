"use client";

import React from "react";
import { useGetUserListedCars } from "@/app/inventory/queries/query";
import { CarListingCard } from "@/app/inventory/components/CarListingCard/CarLisitingCard";

type ListedCarProps = {
  userId: string;
};

export const ListedCar: React.FC<ListedCarProps> = ({ userId }) => {
  const { data } = useGetUserListedCars(userId);
  console.log(data, "DATA");
  return (
    <section className="grid grid-cols-4 md:grid-cols-3 p-3">
      {data?.map((car, i) => (
        <CarListingCard
          key={i}
          img={car?.img}
          name={car?.title}
          price={car?.price}
          specs={car?.spec}
          carId={car?._id}
          userId={car?.userId}
          clerkId={userId}
        />
      ))}
    </section>
  );
};
