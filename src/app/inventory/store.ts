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
};

export const getAddNewCarStore = create(() => initialState);

export const setAddNewCarStore = (fn: (state: Store) => void) => {
  return getAddNewCarStore.setState(produce(fn));
};

export const resetAddNewCarStore = () => {
  getAddNewCarStore.setState(initialState);
};
