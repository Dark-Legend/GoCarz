"use client";

import { CarCarousel } from "@/app/car-detail/components/CarCarousel/CarCarousel";
import { Button } from "@/components/common/Button/Button";
import { Card, CardContent, CardTitle } from "@/components/common/Card/card";
import { Title } from "@/components/common/Title/Title";
import { Heart, MessageSquareIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { JSX } from "react";
import { useGetCarDetail } from "../../queries/query";

const specsDetails = [
  {
    type: "13k Kilometers",
    icon: "/carIcon.svg",
  },
  {
    type: "Petrol",
    icon: "/petrol.svg",
  },
  {
    type: "Automatic",
    icon: "/gear.svg",
  },
];

export const CarInfo: React.FC = ({
  carId,
}: {
  carId: string;
}): JSX.Element => {
  const { data } = useGetCarDetail(carId);

  return (
    <section className="flex items-stretch justify-between gap-14">
      <section className="flex flex-col gap-20">
        <CarCarousel imgArr={data?.imageUrls} />
        <Button variant="outline" className="w-1/2 h-10">
          <Heart />
          Save
        </Button>
      </section>

      <section className="flex flex-col flex-1 justify-start gap-1 w-[300px]">
        <Title className="text-3xl">{data?.title}</Title>
        <p className="m-0 p-0 text-btnColor font-semibold text-2xl">
          $ {data?.price}
        </p>
        <div className="flex justify-between items-center mt-5">
          {data?.spec?.map((carDetail, i) => (
            <p
              key={i}
              className="flex items-center gap-1 text-secondaryTextColor font-medium"
            >
              <Image
                src={carDetail?.icon}
                alt="carIcon"
                width={20}
                height={20}
              />
              {carDetail?.type}
            </p>
          ))}
        </div>
        <Card className="py-5 px-3 flex flex-col mt-16">
          <CardTitle className="flex items-center gap-2 text-primaryTextColor font-semibold text-lg">
            <MessageSquareIcon />
            Have Questions ?
          </CardTitle>
          <CardContent className="flex flex-col gap-3">
            <p className="m-0 p-0 text-secondaryTextColor">
              Our representatives are available to answer all your queries about
              this vehicle.
            </p>

            <Button variant="outline" className="w-full">
              Request Info
            </Button>
          </CardContent>
        </Card>
        <Button className=" mt-16 h-12">
          <ShoppingBag />
          Buy Now
        </Button>
      </section>
    </section>
  );
};
