import React from "react";
import { Title } from "@/components/common/Title/Title";
import { chooseUsDetail } from "./constant";
import { Card } from "@/components/common/Card/card";

const WhyChooseUs = () => {
  return (
    <section className="my-10 flex flex-col gap-8 p-3">
      <Title className="text-center">Why Choose Our Platform</Title>
      <section className="flex items-center justify-center gap-14">
        {chooseUsDetail?.map((detail, i) => (
          <Card
            key={i}
            className="flex justify-center items-center flex-col gap-5 w-[400px] p-2 h-40"
          >
            <Title>{detail.title}</Title>
            <p className="text-wrap text-center text-secondaryTextColor font-medium">
              {detail.description}
            </p>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default WhyChooseUs;
