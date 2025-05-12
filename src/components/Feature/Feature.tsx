import React from "react";
import { Title } from "@/components/common/Title/Title";
import Image from "next/image";
import { CarCard } from "@/components/Feature/CarCard";
const carSpecificationDetails = [
  {
    name: "Mercedes Benz E-Class",
    img: "/car.jpg",
    price: "50,000 $",
    specs: [
      {
        type: "10,000 miles",
        icon: "/carIcon.svg",
      },
      {
        type: "Petrol",
        icon: "/petrol.svg",
      },
      {
        type: "Automatix",
        icon: "/gear.svg",
      },
    ],
  },
  ,
  {
    name: "Mercedes Benz E-Class",
    img: "/car.jpg",
    price: "50,000 $",
    specs: [
      {
        type: "10,000 miles",
        icon: "/carIcon.svg",
      },
      {
        type: "Petrol",
        icon: "/petrol.svg",
      },
      {
        type: "Automatix",
        icon: "/gear.svg",
      },
    ],
  },
  ,
  {
    name: "Mercedes Benz E-Class",
    img: "/car.jpg",
    price: "50,000 $",
    specs: [
      {
        type: "10,000 miles",
        icon: "/carIcon.svg",
      },
      {
        type: "Petrol",
        icon: "/petrol.svg",
      },
      {
        type: "Automatix",
        icon: "/gear.svg",
      },
    ],
  },
  {
    name: "Mercedes Benz E-Class",
    img: "/car.jpg",
    price: "50,000 $",
    specs: [
      {
        type: "10,000 miles",
        icon: "/carIcon.svg",
      },
      {
        type: "Petrol",
        icon: "/petrol.svg",
      },
      {
        type: "Automatix",
        icon: "/gear.svg",
      },
    ],
  },
];
export const Feature: React.FC = () => {
  return (
    <section className="p-3 flex flex-col gap-3 my-3">
      <div className="flex justify-between items-center cursor-pointer">
        <Title>Featured Cars</Title>
        <div className="flex items-center gap-2">
          <p className="p-0 m-0 font-medium">View All</p>
          <Image
            src={"./arrowRight.svg"}
            width={18}
            height={18}
            alt="arrow icon"
          />
        </div>
      </div>
      <section className="flex justify-between items-center gap-2">
        {carSpecificationDetails?.map((carDetail, i) => (
          <>
            <CarCard key={i} {...carDetail} />
          </>
        ))}
      </section>
    </section>
  );
};
