import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLocked, toggleClosed } from '../store/actions';

const Controls = () => {
  // const { locked, closed, toggleLocked, toggleClosed } = props;
  const locked = useSelector(state => state.locked);
  const closed = useSelector(state => state.closed);
  const dispatch = useDispatch();

  return (
    <div className='controls panel'>
      <button
        disabled={!closed}
        onClick={() => dispatch(toggleLocked())}
        className='toggle-btn'>
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button
        disabled={locked}
        onClick={() => dispatch(toggleClosed())}
        className='toggle-btn'>
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
