import { Logo } from "./Logo";
import { UserAuthentication } from "@/components/Header/UserAuthentication";

export const Header: React.FC = () => {
  return (
    <section className="p-2 flex justify-between items-center shadow py-3">
      <Logo />
      <div className="flex items-center gap-2 ">
        <UserAuthentication />
      </div>
    </section>
  );
};
