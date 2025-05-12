import { produce } from "immer";
import { create } from "zustand";

type Store = {
  priceRange: number[] | number;
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
};

const initialState: Store = {
  priceRange: 0,
  make: "",
  bodyType: "",
  fuelType: "",
  transmission: "",
};

export const getListStateStore = create(() => initialState);

export const setListCarStore = (fn: (state: Store) => void) => {
  return getListStateStore.setState(produce(fn));
};

export const resetListCarStore = () => {
  getListStateStore.setState(initialState);
};
