import PropTypes from 'prop-types';
import React from 'react';
import * as Icons from './icons';

export default function Icon({  icon }) {
  return React.createElement(Icons[icon], {
    height: "30px",
    width: "30px",
  });
}

Icon.propTypes = {
  icon: PropTypes.oneOf([
    'ArrowDown',
    'ArrowNext',
    'ArrowPrevious',
    'ArrowUp',
  ]),
};
