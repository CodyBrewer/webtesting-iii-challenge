import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  test('should render without crashing', () => {
    render(<Controls />);
  });
  test('should provide button to toggle closed state', () => {
    const { getByText } = render(<Controls />);
    const closeButton = getByText(/close gate/i);
    expect(closeButton).toBeInTheDocument();
  });
  test('should provide button to toggle locked state', () => {
    const { getByText } = render(<Controls />);
    const lockButton = getByText(/lock gate/i);
    expect(lockButton).toBeInTheDocument();
  });
  test('should change lock/unlock button text to reflect the state of the door if clicked', () => {
    const mockLock = jest.fn();
    const { getByText } = render(
      <Controls toggleLocked={mockLock} locked={true} closed={true} />
    );
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);
    expect(mockLock).toHaveBeenCalled();
  });
  test('should should change close/open button text to reflect the state of the door clicked', () => {
    const mockOpen = jest.fn();
    const { getByText } = render(
      <Controls toggleClosed={mockOpen} closed={true} locked={false} />
    );
    const openButton = getByText(/open gate/i);
    fireEvent.click(openButton);
    expect(mockOpen).toHaveBeenCalled();
  });
});
