import { API_URL } from "@/constant";
import { carDataTransformation } from "@/util";
import { useQuery } from "@tanstack/react-query";

export const useGetBookmarkCar = (userId: string) => {
  return useQuery({
    queryKey: ["getBookmarkCar", userId],
    queryFn: async () => {
      const request = await fetch(`${API_URL}/bookmark?clerkId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request?.json();
      return response;
    },
    select: (data) => {
      const transformedData = carDataTransformation(data?.savedCars);
      return transformedData;
    },
    enabled: Boolean(userId),
  });
};

export const useGetUserListedCars = (userId: string) => {
  return useQuery({
    queryKey: ["getUserListedCars", userId],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/car?id=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user's listed cars");
      }

      const data = await res.json();
      return data;
    },
    select: (data) => {
      const transformedData = carDataTransformation(data?.data); // same as used in bookmarks
      return transformedData;
    },
    enabled: Boolean(userId),
  });
};
