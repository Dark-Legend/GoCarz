import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Car from "@/models/Car";
import User from "@/models/User";

export async function DELETE(
  req: Request,
  { params }: { params: { carId: string } }
) {
  try {
    await dbConnect();

    const carId = params?.carId;
    const body = await req.json();
    const { userId } = body;

    const car = await Car.findById(carId);

    if (!car) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    // Optional: verify car belongs to user
    if (car.userId?.toString() !== userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Delete the car listing
    await Car.findByIdAndDelete(carId);

    // Remove reference from User model
    await User.findByIdAndUpdate(userId, {
      $pull: { savedCars: carId }, // in case it's in savedCars
    });

    return NextResponse.json(
      { message: "Car listing deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting car:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
