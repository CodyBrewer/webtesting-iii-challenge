import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  test('should render without crashing', () => {
    render(<Display />);
  });
  test('should display open and unlocked', () => {
    const { queryByText } = render(<Display />);
    expect(queryByText(/unlocked/i)).toBeTruthy();
    expect(queryByText(/open/i)).toBeTruthy();
  });
  test('should display closed if the closed prop is true', () => {
    const { queryByText } = render(<Display close={true} />);
    expect(queryByText(/closed/i)).toBeTruthy();
  });
});
