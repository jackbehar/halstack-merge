
interface Props {
  children: React.ReactNode
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/table/
 */
const DxcTableRow = (props: Props) => {
  return (
      <tr>{props.children}</tr>
  );
};

export default DxcTableRow;
