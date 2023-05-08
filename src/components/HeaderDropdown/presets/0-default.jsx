import DxcHeaderDropdown from "../HeaderDropdown";

const options = [
  {
    value: 1,
    label: "Android"
  },
  {
    value: 2,
    label: "Windows"
  },
  {
    value: 3,
    label: "IOS"
  }
];

export default (
  <DxcHeaderDropdown uxpId="header-dropdown" label="Select OS" options={options}/>
);
