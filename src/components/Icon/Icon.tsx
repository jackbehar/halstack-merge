import React, { ReactElement } from "react";
import * as Icons from "./icons";
import { IconValues } from './types';

interface IconProps {
  icon?: IconValues;
}

export default function Icon({ icon }: IconProps): ReactElement | null {
  return icon ? (
    React.createElement(Icons[icon], {
      height: "30px",
      width: "30px",
    })
  ) : null;
}


