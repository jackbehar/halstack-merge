
interface Props {
  children: React.ReactNode
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/table/
 */
const DxcTableBody = (props: Props) => {
  return (
   <tbody>{props.children}</tbody>
  );
};

export default DxcTableBody;
