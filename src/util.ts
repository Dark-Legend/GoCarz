export const carDataTransformation = (data) => {
  return data?.map((carData) => ({
    price: "30,000 $",
    img: carData?.imageUrls?.[0],
    name: carData?.title,
    spec: [
      {
        type: carData?.kilometersDrive,
        icon: "/carIcon.svg",
      },
      {
        type: carData?.fuelType,
        icon: "/petrol.svg",
      },
      {
        type: carData?.transmission,
        icon: "/gear.svg",
      },
    ],
    ...carData,
  }));
};
