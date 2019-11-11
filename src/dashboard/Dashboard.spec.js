import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  test('should render without crashing', () => {
    render(<Dashboard />);
  });
  test('should show the controls and the initial display', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/locked/i)).toBeInTheDocument();
    expect(getByText(/unlocked/i)).toBeInTheDocument();
    expect(getByText(/lock gate/i)).toBeInTheDocument();
    expect(getByText(/close gate/i)).toBeInTheDocument();
  });
  test('should show default values - unlocked and open', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/unlocked/i)).toBeInTheDocument();
    expect(getByText(/open/i)).toBeInTheDocument();
  });
  test('should not be closed or open if gate locked', () => {
    const { queryByText } = render(<Dashboard />);
    const lockGateButton = queryByText(/lock gate/i);
    fireEvent.click(lockGateButton);
    //open gate SHOULD NOT be in the document when the gate is LOCKED
    expect(queryByText(/open gate/i)).not.toBeInTheDocument();
    // close gate SHOULD be in the document when the gate is LOCKED
    expect(queryByText(/lock gate/i)).toBeInTheDocument();
  });
});
