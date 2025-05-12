import dbConnect from "@/lib/mongoose";
import Car from "@/models/Car";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const carDetail = await Car.findById(id);

    if (id?.length && carDetail) {
      return new Response(JSON.stringify({ data: [carDetail] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const carsList = await Car.find();
    if (!carsList?.length) {
      return new Response("No items found!", {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ data: carsList }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: unknown) {
    return new Response(e, {
      status: 500,
    });
  }
}
