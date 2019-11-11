import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  test('should render without crashing', () => {
    render(<Controls />);
  });
});
