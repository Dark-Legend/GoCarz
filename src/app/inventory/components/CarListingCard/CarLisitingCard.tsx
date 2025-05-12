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
import { Edit, Trash } from "lucide-react";
import { useDeleteCarListing } from "@/app/inventory/queries/mutations";
import { EditCar } from "@/app/inventory/components/EditCar/EditCar";

export const CarListingCard: React.FC = ({
  carId,
  img,
  name,
  price,
  specs,
  userId,
  clerkId,
}) => {
  console.log("list cars", carId);
  const deleteListingMutation = useDeleteCarListing();

  const handleDeleteListing = () => {
    deleteListingMutation?.mutate({ carId, userId });
  };
  return (
    <Card className="w-96 p-0 cursor-pointer">
      <CardHeader className="w-full p-2">
        <Image
          src={img || "./noData.jpg"}
          alt="car img"
          className="w-full h-48 object-cover rounded-lg hover:scale-95 transition-all duration-500"
          width={384} // Width = 96 * 4 (Tailwind w-96)
          height={192}
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
        <section className="flex items-center justify-between gap-2">
          <EditCar carId={carId} clerkId={clerkId}>
            <Button className="rounded-md w-72">
              Edit <Edit />
            </Button>
          </EditCar>
          <Button variant="outline" onClick={handleDeleteListing}>
            <Trash />
          </Button>
        </section>
      </CardContent>
    </Card>
  );
};
