import React from 'react';
import { DxcButton } from "@dxc-technology/halstack-react";
import ButtonPropsType from "@dxc-technology/halstack-react/button/types";
import Icon from '../Icon/Icon'
import { IconValues } from '../Icon/types';

import "./styles.css"

export interface MergeButtonPropsType extends ButtonPropsType {
  icon?: IconValues;
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/button/
 */

export default function Button(props: MergeButtonPropsType) {

  const [iconState, setIconState] = React.useState(props.icon);
  
  React.useEffect(() => { 
    setIconState(props.icon) 
  }, [props]); // Only re-run the effect if value prop changes


  const selectedIcon = <Icon icon={iconState}/>

  return <div><DxcButton {...props} icon={props.icon && selectedIcon } /></div>;
}
