import React from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';
import Slot from '../Slot/Slot';

function renderSlots(columnCount) {
  const slots = [];
  for (let i = 0; i < columnCount; i++) {
    slots.push(<Slot />);
  }
  return slots;
}

function renderRows(rowCount, columnCount) {
  const result = [];
  for (let i = 0; i < rowCount; i++) {
    result.push(
      <div className={styles.row}>
        {renderSlots(columnCount)}
      </div>,
    );
  }
  return result;
}

const Board = ({ rows, columns }) => (
  <div className={styles.board}>
    {renderRows(rows, columns)}
  </div>
);

Board.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};

export default Board;
