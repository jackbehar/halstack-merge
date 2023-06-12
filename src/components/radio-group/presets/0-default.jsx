import DxcRadioGroup from "../RadioGroup";

const options = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
  { label: "Other", value: "other" },
];

export default (
  <DxcRadioGroup uxpId="radio-group" label="Gender" options={options} />
);
