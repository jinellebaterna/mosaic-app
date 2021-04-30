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

const Board = ({ rowCount, columnCount }) => {
  // eslint-disable-next-line no-unused-vars
  const [boardState, setBoardState] = useState(getInitialBoardState(rowCount, columnCount));
  const [playerTurn, setPlayerTurn] = useState(1);

  function reset() {
    setBoardState(getInitialBoardState(rowCount, columnCount));
    setPlayerTurn(1);
  }

  function handleDrop(columnIndex) {
    let row = rowCount - 1;
    while (row >= 0) {
      if (boardState[row][columnIndex] === 0) {
        boardState[row][columnIndex] = playerTurn;
        setPlayerTurn(playerTurn === 1 ? 2 : 1);
        break;
      }
      row--;
    }
  }

  function renderDropIcons() {
    const icons = [];
    for (let i = 0; i < columnCount; i++) {
      let row = rowCount - 1;
      while (row >= 0) {
        if (boardState[row][i] === 0) {
          break;
        }
        row--;
      }
      const disabled = row < 0;

      icons.push(<ColumnDropArrow disabled={disabled} onDrop={() => handleDrop(i)} />);
    }
    return icons;
  }

  return (
    <div className={styles.board}>
      <div className={styles.dropIcons}>
        {renderDropIcons()}
      </div>
      <div className={styles.container}>
        {boardState.map((row) => renderRow(row))}
      </div>
      <button type="button" label="reset" onClick={reset} className={styles.base} />
    </div>
  );
};

Board.propTypes = {
  rowCount: PropTypes.number.isRequired,
  columnCount: PropTypes.number.isRequired,
};

export default Board;
