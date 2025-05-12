import React from "react";
import { Title } from "@/components/common/Title/Title";
import { Button } from "@/components/common/Button/Button";

export const Footer: React.FC = () => {
  return (
    <section className="bg-heroBgColor p-3 flex justify-center items-center flex-col gap-2 py-10">
      <Title className="text-3xl">Ready to Find Your Dream Car?</Title>
      <p className="text-primaryTextColor font-medium text-lg text-wrap w-1/3 text-center">
        Join Thousands of satisfied customers who found their perfect vehicle
        through our platform
      </p>
      <Button className="my-8 w-52 h-12">View All Cars</Button>
    </section>
  );
};
