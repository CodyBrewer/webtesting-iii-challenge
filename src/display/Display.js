import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const closed = useSelector(state => state.closed);
  const locked = useSelector(state => state.locked);
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className='display panel'>
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

export default Display;
