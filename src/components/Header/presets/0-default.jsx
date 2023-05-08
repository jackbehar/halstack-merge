import DxcHeader from "../Header";
import DxcHeaderDropdown from "../../HeaderDropdown/HeaderDropdown";
const options = [
  {
    value: 1,
    label: "Android",
  },
  {
    value: 2,
    label: "Windows",
  },
  {
    value: 3,
    label: "IOS",
  },
];

export default (
  <DxcHeader uxpId="header" slotName="header" underlined>
    <DxcHeaderDropdown
      uxpId="header-dropdown"
      label="Select OS"
      options={options}
    />
  </DxcHeader>
);
