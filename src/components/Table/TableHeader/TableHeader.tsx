
interface Props {
  children: React.ReactNode
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/table/
 */
const DxcTableHeader = (props: Props) => {
  return (
      <th>{props.children}</th>
  );
};

export default DxcTableHeader;
