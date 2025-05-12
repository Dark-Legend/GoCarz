import { produce } from "immer";
import { create } from "zustand";

type Store = {
  model: string;
  year: number;
  kilometersDrive: number;
  owner: number;
  location: string;
  color: string;
  imgUrls: string[] | [];
  description: "";
  features: string[] | [];
  contactNumber: string;
  make: string;
  fuelType: string;
  transmission: string;
  title: string;
};

const initialState: Store = {
  make: "",
  model: "",
  year: 0,
  kilometersDrive: 0,
  fuelType: "",
  transmission: "",
  owner: 0,
  location: "",
  color: "",
  imgUrls: [],
  description: "",
  features: [],
  contactNumber: "",
  title: "",
};

export const getEditCarStore = create(() => initialState);

export const setEditCarStore = (fn: (state: Store) => void) => {
  return getEditCarStore.setState(produce(fn));
};

export const resetEditCarStore = () => {
  getEditCarStore.setState(initialState);
};
