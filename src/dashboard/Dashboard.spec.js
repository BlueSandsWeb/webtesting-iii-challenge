import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

describe('<Dashboard />', () => {
  // Check Dashboard renders
  test('Dashboard renders', () => {
    expect(render(<Dashboard />)).not.toBeNull();
  })

  test.skip('Matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('<Display /> renders in <Dashboard />', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/unlocked/i)).toHaveTextContent(/unlocked/i);
  })
  test('<Controls /> renders in <Dashboard />', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/close/i)).toHaveTextContent(/close/i);
  })
})

