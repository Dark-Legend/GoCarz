"use client";

import { Title } from "@/components/common/Title/Title";
import React, { ChangeEvent } from "react";
import { getAddNewCarStore, setAddNewCarStore } from "@/app/inventory/store";
import { Input } from "@/components/common/Input/input";
import { Card } from "@/components/common/Card/card";
import { Button } from "@/components/common/Button/Button";
import { Textarea } from "@/components/common/Textarea/textarea";
import { useAddCarListing } from "@/app/inventory/queries/mutations";
import { generateInputData } from "@/app/inventory/utils";

export const AddCar: React.FC = ({ userId }) => {
  const data = getAddNewCarStore((s) => s);
  const addCarMutation = useAddCarListing();

  const handleInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e?.target;
    console.log(e?.target?.name, e?.target?.value);
    setAddNewCarStore((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleAddCarMutation = (e) => {
    e?.preventDefault();
    addCarMutation?.mutate({ clerkId: userId, carData: data });
  };

  const inputFields = generateInputData(data, handleInputs);
  return (
    <section>
      <Card className="p-5">
        <div>
          <Title>Car Details</Title>
          <p>Enter the details of the car you want to add</p>
        </div>
        <form className="flex flex-col gap-1">
          <section className="grid grid-cols-3 gap-5 mt-10">
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
          </section>
          <section>
            <Button onClick={handleAddCarMutation} className="h-10 w-64">
              Save
            </Button>
          </section>
        </form>
      </Card>
    </section>
  );
};
