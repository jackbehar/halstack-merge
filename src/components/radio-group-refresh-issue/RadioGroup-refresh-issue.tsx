import { DxcRadioGroup as HalstackRadioGroup } from "@dxc-technology/halstack-react";
import RadioGroupPropsType from "@dxc-technology/halstack-react/radio-group/types";
import React from 'react'
export interface MergeRadioGroupPropsType extends Omit<RadioGroupPropsType, 'defaultValue'> {
    /**
     * Number of the current selected value.
     * @uxpinbind onChange 0
     */
    value?: string;
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/radio-group/
 * @uxpinwrappers SkipContainerWrapper
 */
const DxcRadioGroupRefreshIssue = (props: MergeRadioGroupPropsType) => {

    React.useEffect(() => {
        console.log(props.optionalItemLabel)
    }, [props.optionalItemLabel]);
    return (


        <div style={{ display: "grid" }} >
            <p>test: {props.optionalItemLabel}</p>
            <HalstackRadioGroup {...props} />
        </div>
    )
}

export default DxcRadioGroupRefreshIssue;
