import React from "react";
import { CarInfo } from "@/app/car-detail/components/CarInfo/CarInfo";
import { CarFeatures } from "@/app/car-detail/components/CarFeatures/CarFeatures";
import { CarSpecification } from "@/app/car-detail/components/CarSpecification/CarSpecification";

type CarDetailProp = {
  params: {
    id: string;
  };
};

const CarDetails: React.FC<CarDetailProp> = async ({ params }) => {
  const { id } = await params;

  return (
    <section className="py-10 px-16 flex flex-col gap-14 border border-solid border-blue-600">
      <CarInfo carId={id} />
      <CarFeatures />
      <CarSpecification />
    </section>
  );
};

export default CarDetails;
