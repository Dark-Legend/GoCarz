"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common/Card/card";
import Image from "next/image";
import { Separator } from "@/components/common/Separator/separator";
import { Button } from "@/components/common/Button/Button";
import Link from "next/link";
import {
  useBookmarkCar,
  useUnbookmarkCar,
} from "@/app/inventory/queries/mutations";

export const CarCard: React.FC = ({
  name,
  img,
  price,
  specs,
  carId,
  clerkId,
  isBookmarked = false,
}) => {
  const unbookmarkMutation = useUnbookmarkCar();
  const bookmarkCarMutation = useBookmarkCar();
  const handleBookmarkUnbookmark = () => {
    if (clerkId) {
      if (!isBookmarked) {
        bookmarkCarMutation?.mutate({ clerkId, carId });
      } else {
        unbookmarkMutation?.mutate({ clerkId, carId });
      }
    }
  };
  console.log("list cars");
  return (
    <Card className="w-96  p-0 cursor-pointer">
      <CardHeader className="w-full p-1">
        <Image
          src={img}
          alt="car img"
          className="w-full h-full rounded-lg hover:scale-95 transition-all duration-500"
          width={100}
          height={100}
          quality={100}
          unoptimized
        />
        <div className="flex items-center justify-between py-1">
          <CardTitle className="px-2 font-medium">{name}</CardTitle>
          <CardDescription className="font-medium">{price}</CardDescription>
        </div>
        <Separator className="bg-gray-400" />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 py-2 px-2">
        <section className="flex  justify-between items-center">
          {specs?.map((spec, i) => (
            <>
              <div
                key={i}
                className="bg-boxColor w-20 h-16 flex flex-col items-center justify-center p-1 rounded-md"
              >
                <Image src={spec?.icon} alt="car Icon" width={25} height={25} />
                <p className="p-0 m-0 text-secondaryTextColor text-[12px]">
                  {spec?.type}
                </p>
              </div>
            </>
          ))}
        </section>
        <section className="flex items-center gap-2">
          <Link href="/car-detail/67f403a92e8288ee7b77949d">
            <Button className="rounded-md w-72">
              View Details <img src="/launch.svg" />
            </Button>
          </Link>
          <Button variant="outline">
            <Image
              onClick={handleBookmarkUnbookmark}
              src="/bookmark.svg"
              width={20}
              height={20}
              alt="view detail icon"
            />
          </Button>
        </section>
      </CardContent>
    </Card>
  );
};
