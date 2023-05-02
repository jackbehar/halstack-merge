import ToggleGroup from "../ToggleGroup";

const options = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "Twitter",
  },
  {
    value: 3,
    label: "Linkedin",
  },
];

export default (
  <ToggleGroup
    uxpId="text-input"
    label="Choose a social network"
    options={options}
  ></ToggleGroup>
);
