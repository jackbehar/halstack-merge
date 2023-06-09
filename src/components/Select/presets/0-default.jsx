import DxcSelect from "../Select";

export default (
  <DxcSelect
    uxpId="select"
    label="Select your favorite city"
    placeholder="Choose a city"
    options={[
      {
        label: "Madrid",
        value: "madrid",
      },
      {
        label: "Melbourne",
        value: "melbourne",
      },
      {
        label: "London",
        value: "london",
      },
      {
        label: "Roma",
        value: "roma",
      },
    ]}
  ></DxcSelect>
);
