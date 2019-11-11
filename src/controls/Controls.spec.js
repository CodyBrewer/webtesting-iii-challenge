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
});
