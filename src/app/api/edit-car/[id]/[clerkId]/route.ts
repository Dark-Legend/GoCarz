import Car from "@/models/Car";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id, clerkId } = await params;

    const userExist = await User.findOne({ clerkId });

    if (!userExist) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const updates = await req.json();

    const car = await Car.findById(id);

    if (!car) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    console.log(userExist, id, "CAR");
    if (userExist.clerkId !== clerkId) {
      return NextResponse.json(
        { message: "You are not authorized to edit this car" },
        { status: 403 }
      );
    }
    const updatedCar = await Car.findByIdAndUpdate(id, updates.data, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      message: "Car updated successfully",
      data: updatedCar,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update car", error: error.message },
      { status: 500 }
    );
  }
}
