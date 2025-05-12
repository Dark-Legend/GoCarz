import { API_URL } from "@/constant";
import { carDataTransformation } from "@/util";
import { useQuery } from "@tanstack/react-query";

export const useGetListOfCars = () => {
  return useQuery({
    queryKey: ["getListOfCars"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/cars`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response?.json();
      return result;
    },
    select: (data) => {
      const transformedData = carDataTransformation(data?.data);
      console.log(transformedData, "DATA");
      return transformedData;
    },
  });
};
