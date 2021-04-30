import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ColumnDropArrow.module.scss';
import { ReactComponent as DownArrowIcon } from '../../icons/down-arrow-icon.svg';

const ColumnDropArrow = ({ onDrop, disabled }) => (
  <div className={classnames(styles.columnDropArrow, {
    [styles.disabled]: disabled,
  })}
  >
    <DownArrowIcon onClick={disabled ? null : onDrop} />
  </div>
);

ColumnDropArrow.propTypes = {
  onDrop: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ColumnDropArrow;
