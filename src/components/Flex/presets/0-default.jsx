import * as React from "react";
import Flex from "../Flex";
import Button from "../../Button/Button"

export default (
  <Flex uxpId="flex-container" gap="2rem">
    <Flex uxpId="flex-1">
    <Button  uxpId="button-1" label="Button 1" />
    </Flex>
    <Flex uxpId="flex-2">
    <Button  uxpId="button-2" label="Button 2" />
    </Flex>
  </Flex>
);
