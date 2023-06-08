import DxcSlider from "../Slider";

export default (
  <DxcSlider
    uxpId="slider"
    label="Select a value"
    value={50}
    marks
    step={10}
    minValue={20}
    maxValue={80}
    showLimitsValues={true}
  />
);
