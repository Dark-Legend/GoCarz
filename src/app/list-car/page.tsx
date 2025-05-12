import { Title } from "@/components/common/Title/Title";
import Image from "next/image";
import React from "react";
import { PriceSlider } from "@/app/list-car/components/PriceSlider/PriceSlider";
import { Make } from "@/app/list-car/components/Make/Make";
import { BodyType } from "@/app/list-car/components/BodyType/BodyType";
import { FuelType } from "@/app/list-car/components/FuelType/FuelType";
import { Transmission } from "@/app/list-car/components/Transmission/Transmission";
import { Separator } from "@/components/common/Separator/separator";
import { Button } from "@/components/common/Button/Button";
import { CarListView } from "@/app/list-car/components/CarListView/CarListView";
import { getUserId } from "@/lib/auth";

const ListCar: React.FC = async () => {
  const userId = await getUserId();
  return (
    <section className="px-3 py-10 grid grid-cols-5 gap-5">
      <section className="col-span-1 grid grid-cols-1 gap-4">
        <Title className="text-btnColor text-5xl">Browse Cars</Title>
        <div className="border border-solid border-gray-200 rounded">
          <div className="p-2 flex items-center gap-2 bg-gray-100">
            <Image
              src={"./filter.svg"}
              width={20}
              height={20}
              alt="filter-icon"
            />
            <p className="p-0 m-0 font-medium">Filters</p>
          </div>

          <PriceSlider />

          <Make />

          <BodyType />
          <FuelType />
          <Transmission />
          <Separator className="my-4" />
          <div className="p-2 ">
            <Button className="w-full h-10">Apply Filters</Button>
          </div>
        </div>
      </section>
      <section className="col-span-4 overflow-y-auto">
        <CarListView userId={userId} />
      </section>
    </section>
  );
};

export default ListCar;
