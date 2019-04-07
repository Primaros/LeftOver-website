import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSwag.css';

const ButtonSwag = ({
  color,
  text,
  onClick,
  disabled,
  style,
}) => {
  let className = 'btn-hover ';
  if (disabled) {
    className += 'disabled';
    return (<button type="button" className={className} style={style}>{text}</button>);
  }
  className += `color-${color}`;
  return (<button type="button" className={className} style={style} onClick={onClick}>{text}</button>);
};

ButtonSwag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['blue']),
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
};

ButtonSwag.defaultProps = {
  color: 'blue',
  disabled: false,
  style: '',
};

export default ButtonSwag;
