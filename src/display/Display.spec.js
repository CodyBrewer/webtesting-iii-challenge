import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  test('should render without crashing', () => {
    render(<Display />);
  });
});
