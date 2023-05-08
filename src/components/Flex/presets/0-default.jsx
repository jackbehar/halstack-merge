import * as React from "react";
import DxcFlex from "../Flex";
import DxcButton from "../../Button/Button";

export default (
  <DxcFlex
    uxpId="flex-container"
    gap="10px"
    justifyContent="space-between"
  >
    <DxcFlex uxpId="flex-1">
      <DxcButton uxpId="button-1" label="Button 1" />
    </DxcFlex>
    <DxcFlex uxpId="flex-2">
      <DxcButton uxpId="button-2" label="Button 2" />
    </DxcFlex>
  </DxcFlex>
);
