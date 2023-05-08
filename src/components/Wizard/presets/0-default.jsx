import DxcWizard from "../Wizard";

export default (
  <DxcWizard
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
