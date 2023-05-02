import Wizard from "../Wizard";

export default (
  <Wizard
    uxpId="wizard"
    steps={[
      {
        label: "Personal info",
        valid: true,
      },
      {
        label: "Policy",
        valid: false,
      },
      {
        label: "Payment",
      },
      {
        label: "Confirm details",
      },
    ]}
  />
);
