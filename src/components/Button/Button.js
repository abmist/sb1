import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Button.module.css';
import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({
  appearance,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        styles['storybook-button'],
        styles[`storybook-button--${appearance}`]
      )}
      {...props}
    >
      {label}
      <span>ME</span>
    </button>
  );
};

Button.diplayName = 'Button';

Button.propTypes = {
  appearance: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {};
