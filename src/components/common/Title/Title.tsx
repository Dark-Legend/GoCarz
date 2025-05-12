import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <div className={`text-2xl font-bold ${className}`}>{children}</div>;
};
