import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnDropArrow.module.scss';
import { ReactComponent as DownArrowIcon } from '../../icons/down-arrow-icon.svg';

const ColumnDropArrow = ({ onDrop }) => (
  <div className={styles.columnDropArrow}>
    <DownArrowIcon onClick={onDrop} />
  </div>
);

ColumnDropArrow.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default ColumnDropArrow;
