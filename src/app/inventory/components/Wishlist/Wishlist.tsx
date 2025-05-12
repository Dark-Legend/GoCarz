"use client";

import React from "react";
import { useGetBookmarkCar } from "../../queries/query";
import { CarCard } from "@/components/Feature/CarCard";

type WishlistProps = {
  userId: string;
};

export const Wishlist: React.FC<WishlistProps> = ({ userId }) => {
  const { data } = useGetBookmarkCar(userId);
  return (
    <section className="grid grid-cols-4 md:grid-cols-3 mt-1 p-3 gap-3">
      {data?.map(({ name, img, price, spec, _id }, i) => (
        <CarCard
          key={i}
          carId={_id}
          clerkId={userId}
          name={name}
          img={img}
          price={price}
          specs={spec}
          isBookmarked={true}
        />
      ))}
    </section>
  );
};
