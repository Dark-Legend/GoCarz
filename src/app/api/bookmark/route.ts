import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import Car from "@/models/Car";
import dbConnect from "@/lib/mongoose";

export async function POST(req) {
  try {
    await dbConnect();

    const { clerkId, carId } = await req.json();

    if (!clerkId || !carId) {
      return NextResponse.json(
        { message: "Missing clerkId or carId" },
        { status: 400 }
      );
    }

    // Check if the car exists
    const car = await Car.findById(carId);
    if (!car) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    // Bookmark the car for the user
    const user = await User.findOneAndUpdate(
      { clerkId },
      { $addToSet: { savedCars: carId } }, // Prevents duplicates
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Car bookmarked successfully",
      savedCars: user.savedCars,
    });
  } catch (error) {
    console.error("Error bookmarking car:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const clerkId = searchParams.get("clerkId");

    if (!clerkId) {
      return NextResponse.json({ message: "Missing clerkId" }, { status: 400 });
    }

    // Find user and populate bookmarked cars
    const user = await User.findOne({ clerkId }).populate("savedCars");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      savedCars: user.savedCars,
    });
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
