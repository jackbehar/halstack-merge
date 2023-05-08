import { DxcWizard as DxcWizardUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/wizard/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/wizard/
 */
export interface MergeProps extends Props {
  /**
   * The visibility of the dialog.
   * @uxpinbind onStepClick 0
   */
  currentStep?: number;
}
export default function DxcWizard(props: MergeProps) {
  return (
    <div style={{display:"grid"}}>
      <DxcWizardUXP {...props} />
    </div>
  );
}

