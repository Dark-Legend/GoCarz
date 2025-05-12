import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs/tabs";
import React from "react";
import { AddCar } from "@/app/inventory/components/AddCar/AddCar";
import { Wishlist } from "@/app/inventory/components/Wishlist/Wishlist";
import { auth } from "@clerk/nextjs/server";
import { ListedCar } from "@/app/inventory/components/ListedCar/ListedCar";

const Inventory: React.FC = async () => {
  const { userId } = await auth();
  return (
    <section className="w-full p-5">
      <Tabs defaultValue="addCar" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="addCar">Add Car</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="carList">Car List</TabsTrigger>
        </TabsList>
        <TabsContent className="p-2" value="addCar">
          <AddCar userId={userId} />
        </TabsContent>
        <TabsContent className="p-2" value="wishlist">
          <Wishlist userId={userId} />
        </TabsContent>
        <TabsContent className="p-2" value="carList">
          <ListedCar userId={userId} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Inventory;
