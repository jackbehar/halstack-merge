import { DxcDateInput as DxcDateInputUXP } from "@dxc-technology/halstack-react";
import DateInputPropsType from "@dxc-technology/halstack-react/date-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/date-input/
 */

export default function DxcDateInput(props: DateInputPropsType) {
  return <DxcDateInputUXP {...props} />;
}
