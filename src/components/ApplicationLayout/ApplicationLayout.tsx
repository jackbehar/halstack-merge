import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import ApplicationLayoutPropsType from "@dxc-technology/halstack-react/layout/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/application-layout/
 */
/**
 * @uxpinuseportal
 */

export default function ApplicationLayout(props: ApplicationLayoutPropsType) {
  return (
    <DxcApplicationLayout {...props}>
      <DxcApplicationLayout.Main>{props.children}</DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
}
