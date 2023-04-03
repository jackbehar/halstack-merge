import * as React from "react";
import Select from "../Select";

export default (
  <Select
    uxpId="button"
    label="Select your favorite city"
    placeholder="Choose a city"
    defaultValue="madrid"
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
  ></Select>
);
