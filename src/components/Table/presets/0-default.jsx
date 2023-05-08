import DxcTable from "../Table";
import DxcTableHeader from "../TableHeader/TableHeader";
import DxcTableHead from "../TableHead/TableHead";
import DxcTableBody from "../TableBody/TableBody";
import DxcTableRow from "../TableRow/TableRow";
import DxcTableCell from "../TableCell/TableCell";

export default (
  <DxcTable uxpId="table">
    <DxcTableHead uxpId="table-head">
      <DxcTableHeader uxpId="table-header-1">Header 1</DxcTableHeader>
      <DxcTableHeader uxpId="table-header-2">Header 2</DxcTableHeader>
      <DxcTableHeader uxpId="table-header-3">Header 3</DxcTableHeader>
    </DxcTableHead>
    <DxcTableBody uxpId="table-body">
      <DxcTableRow uxpId="table-row-1">
        <DxcTableCell uxpId="table-cell-1">Cell 1</DxcTableCell>
        <DxcTableCell uxpId="table-cell-2">Cell 2</DxcTableCell>
        <DxcTableCell uxpId="table-cell-3">Cell 3</DxcTableCell>
      </DxcTableRow>
      <DxcTableRow uxpId="table-row-2">
        <DxcTableCell uxpId="table-cell-4">Cell 4</DxcTableCell>
        <DxcTableCell uxpId="table-cell-5">Cell 5</DxcTableCell>
        <DxcTableCell uxpId="table-cell-6">Cell 6</DxcTableCell>
      </DxcTableRow>
    </DxcTableBody>
  </DxcTable>
);
