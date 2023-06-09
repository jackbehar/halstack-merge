import * as React from "react";
import DxcResultsetTable from "../ResultsetTable";
import DxcButton from "../../Button/Button";
import Typography from "../../Typography/Typography";

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    fill="white"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const columns = [
  { displayValue: "Id" },
  { displayValue: "Name" },
  { displayValue: "City" },
  { displayValue: "Actions" },
];

const rows = [
  [
    { displayValue: "001"},
    { displayValue: "Peter"},
    { displayValue: "Miami"},
    { displayValue: <DxcButton icon={deleteIcon} uxpId="buuu"/> },
  ],
  [
    { displayValue: "002"},
    { displayValue: "Louis"},
    { displayValue: "London"},
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
  [
    { displayValue: "003"},
    { displayValue: "Lana"},
    { displayValue: "Amsterdam"},
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
  [
    { displayValue: "004"},
    { displayValue: "Rick"},
    { displayValue: "London"},
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
  [
    { displayValue: "005"},
    { displayValue: "Mark"},
    { displayValue: "Miami"},
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
  [
    { displayValue: "006"},
    { displayValue: "Cris"},
    { displayValue: "Paris"},
    { displayValue: <DxcButton icon={deleteIcon} /> },
  ],
];

export default (
  <DxcResultsetTable
    uxpId="resultsettable"
    columns={columns}
    rows={rows}
  ></DxcResultsetTable>
);
