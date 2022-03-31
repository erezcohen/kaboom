import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Space.module.scss';
import { useContainerDimensions } from './use-container-dimensions';

const initialBoxRect = {
  width: 100,
  height: 100,
  top: 200,
  left: 200
};
let intervalHandle;

const Space = ({ gameOn }) => {
  const [tick, setTick] = useState(0);
  const spaceRef = useRef(null);
  const dimensions = useContainerDimensions(spaceRef);
  const [boxRect, setBoxRect] = useState(initialBoxRect);

  useEffect(
    function setupTick() {
      if (!gameOn) {
        clearInterval(intervalHandle);
        return setTick(0);
      }
      intervalHandle = setInterval(() => setTick((tick) => tick + 1), 1000);
    },
    [gameOn]
  );

  useEffect(function cleanup() {
    return () => clearInterval(intervalHandle);
  }, []);

  useEffect(
    function moveBox() {
      tick === 0
        ? setBoxRect(initialBoxRect)
        : setBoxRect((boxRect) => ({
            ...boxRect,
            left: boxRect.left + boxRect.width
          }));
    },
    [tick]
  );

  return (
    <div ref={spaceRef} className={styles['space']}>
      <div
        style={getBoxStyle(boxRect)}
        className={styles['box']}
        data-testid="box"
      />
    </div>
  );
};

Space.propTypes = {
  gameOn: PropTypes.bool.isRequired
};

export default Space;

//------------------------------------------------------------------------

const getBoxStyle = ({ width, height, left, top }) => ({
  width: width + 'px',
  height: height + 'px',
  left: left + 'px',
  top: top + 'px'
});
