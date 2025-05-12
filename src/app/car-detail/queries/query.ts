import { API_URL } from "@/constant";
import { carDataTransformation } from "@/util";
import { useQuery } from "@tanstack/react-query";
import { setCarDetailStore } from "../store";

export const useGetCarDetail = (id: string) => {
  return useQuery({
    queryKey: ["getCarDetail", id],
    queryFn: async () => {
      const carId: string = `?id=${id}`;
      const request = await fetch(`${API_URL}/cars${id && carId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request?.json();
      return response;
    },
    select: (data) => {
      const transformedData = carDataTransformation(data?.data);
      setCarDetailStore((state) => {
        state.carDetails = transformedData;
      });
      return transformedData?.[0];
    },
  });
};
