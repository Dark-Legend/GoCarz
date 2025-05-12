/* eslint-disable react/jsx-no-undef */
import { Card, CardContent } from "@/components/common/Card/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/Carousel/carousel";
import Image from "next/image";
import React from "react";

export const CarCarousel: React.FC = ({ imgArr }) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-5xl">
      <CarouselContent>
        {imgArr?.map((img, i) => (
          <CarouselItem key={i}>
            <Card className="p-0 w-6xl">
              <CardContent className="p-1">
                <Image
                  src={img}
                  alt="car img"
                  height={100}
                  width={100}
                  className="w-full h-full rounded-lg"
                  unoptimized
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
