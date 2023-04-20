import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";
import { createPortal } from "react-dom";
import { DxcInset, DxcAlert } from "@dxc-technology/halstack-react";

export default function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = useContext(ThemeContext);

  useEffect(() => {
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== "") {
        options.currentTheme = {
          ...JSON.parse(JSON.stringify(props.themeObject)),
        };
      }

      newTheme = options.currentTheme;

      //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION

      const traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == "object") {
            traverse(o[i], fn);
          }
        }
      };

      const obj = props.themeObject;
      const fonts = [];

      traverse(obj, function (k, v) {
        const reg = /FontFamily/g;
        if (!!k.match(reg)) {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          if (
            document.querySelectorAll("link[href='" + v + "']").length === 0
          ) {
            addFont("https://fonts.googleapis.com/css?family=" + v);
            fonts.push(v);
          }
        }
      });

      console.log("fonts", fonts);

      return {
        theme: newTheme,
      };
    });

    return () => {
      const obj = props.themeObject;
      const traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == "object") {
            traverse(o[i], fn);
          }
        }
      };
      traverse(obj, function (k, v) {
        const reg = /FontFamily/g;
        if (!!k.match(reg)) {
          //REMOVE SOURCING FOR EACH FONT FOUND IN THEME
          const links = document.querySelectorAll(
            "link[href='https://fonts.googleapis.com/css?family=" + v + "']"
          );
          links.forEach((link) => {
            link.remove();
          });
        }
      });
    };
  }, [props, setThemeOptions]);

  const addFont = (link) => {
    const newFontLink = document.createElement("link");
    newFontLink.href = link;
    newFontLink.rel = "stylesheet";
    newFontLink.id = "googleFont" + Math.floor(Math.random() * 1000); // generate a unique ID
    document.head.appendChild(newFontLink);
    //console.log("added: ", newFontLink);
  };

  return (
    <>
      {createPortal(
        <div>
          <DxcInset space=".5rem">
            <DxcAlert
              size="fillParent"
              inlineText="Global Theme Customizer Applied. Create or modify theme at:"
            >
              <a
                href="https://developer.dxc.com/halstack/9/theme-generator/advanced-theme/"
                target="_blank"
              >
                https://developer.dxc.com/halstack/9/theme-generator/advanced-theme/
              </a>
            </DxcAlert>
          </DxcInset>
        </div>,
        document.querySelector("#workbench-wrapper")
      )}
    </>
  );
}

ThemeCustomizer.propTypes = {
  /**
   * The updated Theme object
   * */
  themeObject: PropTypes.object,
};
