import React from 'react';
import { connect } from 'react-redux';


const Display = props => {
  const {locked, closed} = props;
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className='display panel'>
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locked: state.locked,
    closed: state.closed
  }
}

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
