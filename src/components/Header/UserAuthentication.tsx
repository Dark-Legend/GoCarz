import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/common/Button/Button";
import { Store } from "lucide-react";
import { addNewUser } from "@/lib/addNewUser";
import Link from "next/link";

export const UserAuthentication: React.FC = async () => {
  const user = await addNewUser();
  const { id } = user || {};
  console.log(id);
  return (
    <div className="flex items-center gap-2.5">
      {id && (
        <Link href="/inventory">
          <Button
            className="flex items-center gap-2 hover:bg-btnColor hover:text-white"
            variant="outline"
          >
            <Store /> Inventory
          </Button>
        </Link>
      )}

      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
