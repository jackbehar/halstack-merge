import React from "react";
import PropTypes from "prop-types";
import { DxcAccordion } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
export default function Accordion(props) {
  return (
    <div style={{ display: "grid" }}>
      <DxcAccordion {...props} />
    </div>
  );
}

Accordion.propTypes = {
   /**
     * The panel label.
     */
   label: PropTypes.string,
   /**
    * Initial state of the panel, only when it is uncontrolled.
    */
   defaultIsExpanded: PropTypes.bool,
   /**
    * Represents the state of the panel. When true, the component will be
    * expanded. If undefined, the component will be uncontrolled and its
    * value will be managed internally by the component.
    * @uxpinbind onChange 0
    */
   isExpanded: PropTypes.bool,
   /**
    * Element or path used as the icon that will be placed next to panel label.
    */
   icon: PropTypes.string,
   /**
    * Assistive text to be placed on the right side of the panel.
    */
   assistiveText: PropTypes.string,
   /**
    * If true, the component will be disabled.
    */
   disabled: PropTypes.bool,
   /**
    * This function will be called when the user clicks the accordion to expand or collapse
    * the panel. The new state of the panel will be passed as a parameter.
    */
   onChange: PropTypes.func,
   /**
    * The expanded panel of the accordion. This area can be used to render
    * custom content.
    */
   children: PropTypes.node,
   /**
    * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
    * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
    */
   margin: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
   /**
    * Value of the tabindex.
    */
   tabIndex: PropTypes.number,
};


