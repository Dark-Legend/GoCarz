// app/api/cars/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Car from "@/models/Car";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { clerkId, data } = body;
    const user = await User.findOne({ clerkId: clerkId });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const newCar = await Car.create({
      ...data,
      userId: user?._id,
    });

    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    const user = await User.findOne({ clerkId: id });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const cars = await Car.find({ userId: user._id });

    return NextResponse.json({ data: cars });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
