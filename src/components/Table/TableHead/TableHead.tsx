
interface Props {
  children: React.ReactNode
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/table/
 */
const DxcTableHead = (props: Props) => {
  return (
    <thead>
      <tr>{props.children}</tr>
    </thead>
  );
};

export default DxcTableHead;
