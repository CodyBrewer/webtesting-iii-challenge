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
});
