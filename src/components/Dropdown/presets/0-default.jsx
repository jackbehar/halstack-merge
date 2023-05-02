import Dropdown from "../Dropdown";

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
  <Dropdown uxpId="dropdown" label="Select OS" options={options}/>
);
