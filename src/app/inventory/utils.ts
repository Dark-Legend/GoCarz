export const generateInputData = (data, onChange) => {
  const inputDetails = [
    {
      name: "title",
      label: "Title",
      placeholder: "Enter Title",
      required: true,
      onChange: onChange,
      value: data?.title,
      type: "text",
    },
    {
      name: "make",
      label: "Make",
      placeholder: "Enter Make",
      required: true,
      onChange: onChange,
      value: data?.make,
      type: "text",
    },
    {
      name: "model",
      label: "Model",
      placeholder: "Enter Model",
      required: true,
      onChange: onChange,
      value: data?.model,
      type: "text",
    },
    {
      name: "year",
      label: "Year",
      placeholder: "Enter Year",
      required: true,
      onChange: onChange,
      value: data?.year,
      type: "number",
    },
    {
      name: "kilometersDrive",
      label: "Kilo Meters Driven",
      placeholder: "e.g. 10000",
      required: true,
      onChange: onChange,
      value: data?.kilometersDrive,
      type: "number",
    },
    {
      name: "fuelType",
      label: "Fuel Type",
      placeholder: "Enter Fuel Type",
      required: true,
      onChange: onChange,
      value: data?.fuelType,
      type: "text",
    },
    {
      name: "transmission",
      label: "Transmission",
      placeholder: "Enter Transmission",
      required: true,
      onChange: onChange,
      value: data?.transmission,
      type: "text",
    },
    {
      name: "owner",
      label: "Owner",
      placeholder: "Enter Owner",
      required: true,
      onChange: onChange,
      value: data?.owner,
      type: "number",
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Enter Location",
      required: true,
      onChange: onChange,
      value: data?.location,
      type: "text",
    },
    {
      name: "color",
      label: "Color",
      placeholder: "Enter Color",
      required: true,
      onChange: onChange,
      value: data?.color,
      type: "text",
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      placeholder: "Enter Contact Number",
      required: true,
      onChange: onChange,
      value: data?.contactNumber,
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter Description",
      required: true,
      onChange: onChange,
      value: data?.description,
      type: "textarea",
      className: "row-span-2",
    },
  ];
  return inputDetails;
};
