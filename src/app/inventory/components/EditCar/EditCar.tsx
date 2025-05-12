"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/common/Dialog/dialog";
import { Title } from "@/components/common/Title/Title";
import React, { ChangeEvent, useEffect } from "react";
import {
  getEditCarStore,
  setEditCarStore,
} from "@/app/inventory/components/EditCar/store";
import { generateInputData } from "@/app/inventory/utils";
import { Input } from "@/components/common/Input/input";
import { Textarea } from "@/components/common/Textarea/textarea";
import { Button } from "@/components/common/Button/Button";
import { useGetCarDetail } from "@/app/car-detail/queries/query";
import { useEditCarListing } from "../../queries/mutations";

type EditCarProps = {
  children: React.ReactNode;
  carId: string;
  clerkId: string;
};

export const EditCar: React.FC<EditCarProps> = ({
  children,
  carId,
  clerkId,
}) => {
  const editStoreState = getEditCarStore((s) => s);
  const { data } = useGetCarDetail(carId);
  const editCarMutation = useEditCarListing();

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e?.target;
    console.log(e?.target?.name, e?.target?.value);
    setEditCarStore((state) => ({
      ...state,
      [name]: value,
    }));
  };
  console.log(data, "DATA");
  const inputFields = generateInputData(editStoreState, handleInputs);
  const handleEditCarMutation = (e) => {
    e?.preventDefault();
    console.log(data, editStoreState, "DATA");
    editCarMutation?.mutate({ clerkId, carData: editStoreState, carId });
  };

  useEffect(() => {
    if (data) {
      setEditCarStore((state) => ({
        ...state,
        title: data?.title,
        make: data?.make,
        model: data?.model,
        year: data?.year,
        fuelType: data?.fuelType,
        transmission: data?.transmission,
        owner: data?.owner,
        location: data?.location,
        color: data?.color,
        contactNumber: data?.contactNumber,
        description: data?.description,
      }));
    }
  }, [data]);
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-[600px] w-full">
        <DialogHeader>
          <Title>Edit Car Detail</Title>
          <p>Enter the details of the car you want to edit</p>
        </DialogHeader>
        <form className="overflow-y-auto">
          {inputFields?.map((input, i) => (
            <div key={i}>
              <label>{input?.label}</label>
              {input?.type === "textarea" ? (
                <Textarea
                  name={input?.name}
                  value={input?.value}
                  onChange={input?.onChange}
                  placeholder="Enter your description here"
                />
              ) : (
                <Input
                  name={input?.name}
                  value={input?.value}
                  onChange={input?.onChange}
                  required
                  type={input?.type}
                  className={`${input?.className} h-10`}
                />
              )}
            </div>
          ))}
        </form>
        <DialogFooter>
          <Button
            onClick={handleEditCarMutation}
            type="submit"
            className="w-40 h-10"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
