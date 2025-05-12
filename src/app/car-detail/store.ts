import { produce } from "immer";
import { create } from "zustand";

type Store = {
  carDetails: {
    _id: string;
    title: string;
    make: string;
    model: string;
    year: number;
    kilomeretesDrive: number;
    fuelType: string;
    transmission: string;
    specsDetails: { type: string; icon: string }[];
    owner: number;
    location: string;
    color: string;
    imageUrls: string[];
    description: string;
    features: string[];
    contactNumber: string;
    isFeatured: string;
    createdAt: string;
  };
};

const initialState: Store = {
  carDetails: {
    _id: "",
    title: "",
    make: "",
    model: "",
    year: 0,
    kilomeretesDrive: 0,
    fuelType: "",
    transmission: "",
    specsDetails: [],
    owner: 0,
    location: "",
    color: "",
    imageUrls: [],
    description: "",
    features: [],
    contactNumber: "",
    isFeatured: "",
    createdAt: "",
  },
};

export const getCarDetailStore = create(() => initialState);

export const setCarDetailStore = (fn: (state: Store) => void) => {
  return getCarDetailStore.setState(produce(fn));
};

export const resetCarDetailStore = () => {
  getCarDetailStore.setState(initialState);
};
