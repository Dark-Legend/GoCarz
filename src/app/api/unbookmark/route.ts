import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { clerkId, carId } = await req.json();

    if (!clerkId || !carId) {
      return NextResponse.json(
        { message: "Missing clerkId or carId" },
        { status: 400 }
      );
    }

    // Remove the carId from savedCars using $pull
    const user = await User.findOneAndUpdate(
      { clerkId },
      { $pull: { savedCars: carId } },
      { new: true }
    ).populate("savedCars"); // Optional: Populate updated car list

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Car unbookmarked successfully",
      savedCars: user.savedCars,
    });
  } catch (error) {
    console.error("Error unbookmarking car:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
