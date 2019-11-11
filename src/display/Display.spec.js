import React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  queryByText
} from '@testing-library/react';
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
    const { queryByText } = render(<Display closed={true} />);
    expect(queryByText(/closed/i)).toBeTruthy();
  });
  test('should have red led as class when locked or closed', () => {
    const { queryAllByTestId } = render(
      <Display closed={true} locked={true} />
    );
    expect(queryAllByTestId('led red-led')).toBeTruthy();
  });
  test('should have green led as class when unlocked or open', () => {
    const { queryAllByTestId } = render(
      <Display closed={false} locked={false} />
    );
    expect(queryAllByTestId('led green-led')).toBeTruthy();
  });
});
