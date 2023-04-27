import Button from "../../Button/Button";
import Header from "../Header";

export default (
  <Header
    uxpId="header"
    name="header"
    underlined
    content={<Button uxpId="header-button" label="Header Button" />}
    responsiveContent={(closeHandler) => (
      <>
        <Button
          uxpId="header-responsive-button"
          label={"Custom Button"}
          onClick={closeHandler}
        />
        Custom content
      </>
    )}
  />
);
