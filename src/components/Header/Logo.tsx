import React from "react";
import Image from "next/image";
import { Title } from "@/components/common/Title/Title";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Image alt="Logo" src={"/logo.svg"} width={40} height={40} />
      <Title>GoCarz</Title>
    </div>
  );
};
