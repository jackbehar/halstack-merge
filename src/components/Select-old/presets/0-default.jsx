import * as React from "react";
import DxcSelect from "../Select";

export default (
  <DxcSelect
    uxpId="button"
    label="Select your favorite city"
    placeholder="Choose a city"
    size="small"
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
