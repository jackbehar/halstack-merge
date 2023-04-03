import React from "react";
import PropTypes from "prop-types";
import { DxcCard } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/card/
 */

export default function Card(props) {
  return <div><DxcCard {...props} /></div>;
}


Card.propTypes = {  
    /**
   * URL of the image that will be placed in the card component.
   * In case of omission, the image container will not appear and
   * the content will occupy its space.
   */
  imageSrc: PropTypes.string,

  /**
   * Color of the image background.
   */
  imageBgColor: PropTypes.string,

  /**
   * Size of the padding to be applied to the image section of the
   * component. You can pass an object with 'top', 'bottom', 'left'
   * and 'right' properties in order to specify different padding sizes.
   */
  imagePadding: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),

  /**
   * Whether the image should appear in relation to the content.
   */
  imagePosition: PropTypes.oneOf(['before', 'after']),

  /**
   * If defined, the tag will be displayed as an anchor, using this prop
   * as "href". Component will show some visual feedback on hover.
   */
  linkHref: PropTypes.string,

  /**
   * This function will be called when the user clicks the card. Component
   * will show some visual feedback on hover.
   */
  onClick: PropTypes.func,

  /**
   * Whether the image must cover the whole image area of the card.
   */
  imageCover: PropTypes.bool,

  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),

  /**
   * @deprecated This prop will be removed shortly, consider using the Inset component for this purpose.
   * Size of the padding to be applied to the content area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  contentPadding: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),

  /**
   * Value of the tabindex given when there is an href.
   */
  tabIndex: PropTypes.number,

  /**
   * Whether the card must be outlined.
   */
  outlined: PropTypes.bool,

  /**
   * Custom content that will be placed in the card component.
   */
  children: PropTypes.node,
};
