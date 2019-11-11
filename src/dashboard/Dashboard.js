import React from 'react';
import { connect } from 'react-redux';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import { toggleClosed, toggleLocked } from '../store/actions';

class Dashboard extends React.Component {
  // state = {
  //   locked: false,
  //   closed: false,
  // };

  render() {
    const { closed, locked, toggleClosed, toggleLocked } = this.props;

    return (
      <>
        <Display />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    locked: state.locked,
    closed: state.closed
  };
};
const mapDispatchToProps = {
  toggleLocked,
  toggleClosed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
