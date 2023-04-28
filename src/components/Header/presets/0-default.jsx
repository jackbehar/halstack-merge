import Header from "../Header";
import HeaderDropdown from "../../HeaderDropdown/HeaderDropdown";
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
  <Header uxpId="header" slotName="header" underlined>
    <HeaderDropdown
      uxpId="header-dropdown"
      label="Select OS"
      options={options}
    />
  </Header>
);
