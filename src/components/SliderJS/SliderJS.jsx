import { DxcSlider as HalstackSlider } from "@dxc-technology/halstack-react/";
// import Props from "@dxc-technology/halstack-react/slider/types";
import PropTypes from 'prop-types';
import * as React from 'react';


/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/slider/
 */

export default function DxcSliderJS(props) {

  // const [value, changeValue] = useState(props.value);

  // const onChange = (newValue:number) => {
  //   changeValue(newValue);
  // };
  // const labelFormat = (value:number) => {
  //   return `${value}°C`;
  // };
  
//   const sliderRef = useRef();
const [defaultValue, setDefaultValue] = React.useState(props.defaultValue);

React.useEffect(() => { 
    alert("default change")
    setDefaultValue(props.defaultValue) 
  }, [props.defaultValue]); // Only re-run the effect if value prop changes


  return (
    <div>
        <div>{defaultValue}</div> 
      <HalstackSlider
     
      // label="Select a value"
      //   value={value}
      //   onChange={onChange}
      //   minValue={0}
      //   maxValue={100}
      //   showLimitsValues={true}
      //   labelFormatCallback={labelFormat}
       
        defaultValue={defaultValue}
        key={Math.random()}
        {...props}
        />
       </div>
  );
}


DxcSliderJS.propTypes =  {
  /**
   * Text to be placed above the slider.
   */
  label: PropTypes.string,
  /**
   * Name attribute of the input element.
   */
  name: PropTypes.string,
  /**
   * Initial value of the slider, only when it is uncontrolled.
   */
  defaultValue: PropTypes.number,
  /**
   * The selected value. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   */
  value: PropTypes.number,
  /**
   * Helper text to be placed above the slider.
   */
  helperText: PropTypes.string,
  /**
   * The minimum value available for selection.
   */
  minValue: PropTypes.number,
  /**
   * The maximum value available for selection.
   */
  maxValue: PropTypes.number,
  /**
   * The step interval between values available for selection.
   */
  step: PropTypes.number,
  /**
   * Whether the min/max value labels should be displayed next to the slider
   */
  showLimitsValues: PropTypes.bool,
  /**
   * Whether the input element for displaying/controlling the slider value should be displayed next to the slider.
   */
  showInput: PropTypes.bool,
  /**
   * If true, the component will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the marks between each step should be shown or not.
   */
  marks: PropTypes.bool,
  /**
   * This function will be called when the slider changes its value, as it's being dragged.
   * The new value will be passed as a parameter when this function is executed.
   */
  onChange: PropTypes.func,
  /**
   * This function will be called when the slider changes its value, but only when the thumb is released.
   * The new value will be passed as a parameter when this function is executed.
   */
  onDragEnd:PropTypes.func,
  /**
   * This function will be used to format the labels displayed next to the slider.
   * The value will be passed as parameter and the function must return the formatted value.
   */
  labelFormatCallback: PropTypes.func,
  
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin: PropTypes.oneOf(['xxsmall', 'xsmall', 'small']),


  /**
   * Size of the component.
   */
  margin: PropTypes.oneOf(['medium', 'large', 'fillParent']),
}