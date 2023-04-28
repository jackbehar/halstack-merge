import HeaderDropdown from "../HeaderDropdown";

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
  <HeaderDropdown uxpId="header-dropdown" label="Select OS" options={options}/>
);
