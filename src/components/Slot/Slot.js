import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Slot.module.scss';

const Slot = ({ player }) => (
  <div className={styles.slot}>
    <div className={classnames(styles.circle, {
      [styles.player1]: player === 1,
      [styles.player2]: player === 2,
    })}
    />
  </div>
);

Slot.propTypes = {
  player: PropTypes.number.isRequired,
};

export default Slot;
