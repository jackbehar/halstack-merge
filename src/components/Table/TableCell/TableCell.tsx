
interface Props {
  children: React.ReactNode
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/table/
 */
const DxcTableCell = (props: Props) => {
  return (
      <td>{props.children}</td>
  );
};

export default DxcTableCell;
