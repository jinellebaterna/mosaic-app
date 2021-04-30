import React from 'react';
import styles from './ColumnDropArrow.module.scss';
import { ReactComponent as DownArrowIcon } from '../../icons/down-arrow-icon.svg';

const ColumnDropArrow = () => (
  <div className={styles.columnDropArrow}>
    <DownArrowIcon />
  </div>
);

export default ColumnDropArrow;
