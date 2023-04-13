import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';

//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  newFontLink.id = 'muiCCustomFont' + index;
  document.head.appendChild(newFontLink);
  //console.log("added: ", newFontLink);
};

function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  React.useEffect(() => {
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== '') {
        options.currentTheme = {
          ...JSON.parse(JSON.stringify(props.themeObject)),
        };
      }

      newTheme = options.currentTheme;
      // console.log('parsed ', props.themeObject);

      //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION

      var traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == 'object') {
            traverse(o[i], fn);
          }
        }
      };

      var obj = props.themeObject;
      const fonts = [];

      traverse(obj, function (k, v) {
        // console.log(k + ' : ' + v);
        const reg = /FontFamily/g;
        if (!!k.match(reg)) {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          let index = 0;
          if (document.querySelectorAll("link[href='" + v + "']").length === 0) {
            addFont('https://fonts.googleapis.com/css?family=' + v, index++);
          }
          fonts.push(v);
        }
      });

      console.log("fonts", fonts)

      return {
        theme: newTheme,
      };
    });
  }, [props, setThemeOptions]); //only re-run if any of these change

  return (
    <div>
      <h1>Global Theme Customizer</h1>
      <p>Create or modify theme at <br/><a href="https://developer.dxc.com/halstack/9/theme-generator/advanced-theme/" target="_blank">
        https://developer.dxc.com/halstack/9/theme-generator/advanced-theme/
        </a></p>
      <div style={{ marginTop: '2em' }}>{props.children}</div>
    </div>
  );
}

ThemeCustomizer.propTypes = {
   /**
   * The updated Theme object
   * */
  themeObject: PropTypes.object,
};

export default ThemeCustomizer;
