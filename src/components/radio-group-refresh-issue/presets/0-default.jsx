import DxcRadioGroupRefreshIssue from "../RadioGroup-refresh-issue"

const options = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
  { label: "Other", value: "other" },
];

export default (
  <DxcRadioGroupRefreshIssue uxpId="radio-group" label="Gender" options={options} />
);
