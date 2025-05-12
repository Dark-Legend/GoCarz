import { API_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setEditCarStore } from "../components/EditCar/store";

interface UnbookmarkPayload {
  clerkId: string;
  carId: string;
}

export const useUnbookmarkCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ clerkId, carId }: UnbookmarkPayload) => {
      const res = await fetch(`${API_URL}/unbookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clerkId, carId }),
      });

      if (!res.ok) {
        throw new Error("Failed to unbookmark car");
      }

      const data = await res.json();
      return data;
    },
    onSuccess: (_, { clerkId }) => {
      // Invalidate bookmark query so it refetches with updated data
      queryClient.invalidateQueries({
        queryKey: ["getBookmarkCar", clerkId],
      });
    },
  });
};

interface BookmarkPayload {
  clerkId: string;
  carId: string;
}

export const useBookmarkCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ clerkId, carId }: BookmarkPayload) => {
      const res = await fetch(`${API_URL}/bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clerkId, carId }),
      });

      if (!res.ok) {
        throw new Error("Failed to bookmark car");
      }

      const data = await res.json();
      return data;
    },
    onSuccess: (_, { clerkId }) => {
      // Invalidate bookmark query so it refetches with updated data
      queryClient.invalidateQueries({
        queryKey: ["getBoomarkCar", clerkId],
      });
    },
  });
};

export const useDeleteCarListing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      carId,
      userId,
    }: {
      carId: string;
      userId: string;
    }) => {
      const response = await fetch(`${API_URL}car/${carId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete car listing");
      }

      return await response.json();
    },
    onSuccess: () => {
      // Refetch listings or update local state
      queryClient.invalidateQueries({ queryKey: ["userListedCars"] });
    },
  });
};

export const useAddCarListing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      clerkId,
      carData,
    }: {
      clerkId: string;
      carData: any;
    }) => {
      const response = await fetch(`${API_URL}/car`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId,
          data: carData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add car listing");
      }

      return await response.json(); // The newly created car listing
    },
    onSuccess: (newCar) => {
      // You can invalidate a query to refetch user-specific data, or update cache here
      queryClient.invalidateQueries({ queryKey: ["getUserListedCars"] });
    },
    onError: (error) => {
      console.error("Error adding car listing:", error);
    },
  });
};

export const useEditCarListing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ clerkId, carData, carId }) => {
      console.log(carData, "CARDATA");
      const response = await fetch(`${API_URL}/edit-car/${carId}/${clerkId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: carData,
        }),
      });

      const result = await response?.json();
      return result;
    },
    onSuccess: (newCar) => {
      queryClient.invalidateQueries({ queryKey: ["getUserListedCars"] });
      setEditCarStore((state) => {});
    },
    onError: (error) => {
      console.error("Error adding car listing:", error);
    },
  });
};
