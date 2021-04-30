import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';
import Slot from '../Slot/Slot';
import ColumnDropArrow from '../ColumnDropArrow/ColumnDropArrow';

function renderRow(slots) {
  return (
    <div className={styles.row}>
      { slots.map((slot) => <Slot player={slot} />)}
    </div>
  );
}

function getInitialBoardState(rowCount, columnCount) {
  const result = [];
  for (let i = 0; i < rowCount; i++) {
    const row = [];
    for (let j = 0; j < columnCount; j++) {
      row.push(0);
    }
    result.push(row);
  }
  return result;
}

function renderDropIcons(columnCount) {
  const icons = [];
  for (let i = 0; i < columnCount; i++) {
    icons.push(<ColumnDropArrow />);
  }
  return icons;
}

const Board = ({ rowCount, columnCount }) => {
  // eslint-disable-next-line no-unused-vars
  const [boardState, setBoardState] = useState(getInitialBoardState(rowCount, columnCount));

  return (
    <div className={styles.board}>
      <div className={styles.dropIcons}>
        {renderDropIcons(columnCount)}
      </div>
      <div className={styles.container}>
        {boardState.map((row) => renderRow(row))}
      </div>
      <div className={styles.base} />
    </div>
  );
};

Board.propTypes = {
  rowCount: PropTypes.number.isRequired,
  columnCount: PropTypes.number.isRequired,
};

export default Board;
