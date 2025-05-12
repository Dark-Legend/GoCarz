import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ChipProps = {
  make: string;
  isActive: boolean;
  onClick: () => void;
};

export const Chip: React.FC<ChipProps> = ({ make, isActive, onClick }) => {
  return (
    <span
      className={cn(
        "border flex items-center gap-2 border-solid border-gray-200 py-1 px-3 rounded-sm hover:bg-blue-100 cursor-default hover:text-blue-700",
        isActive ? "bg-blue-100 text-blue-700 " : ""
      )}
      onClick={onClick}
    >
      {make}
      {isActive && <Check size={14} />}
    </span>
  );
};
