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

  test('Dashboard defualts to open and unlocked', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/^unlocked/i)).toHaveTextContent(/^unlocked/i);
    expect(getByText(/^open/i)).toHaveTextContent(/^open/i);
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

  describe('Integration Testing', () => {
    test('close gate btn press', () => {
      const { getByText } = render(<Dashboard />);  // defaults to locked=false closed=false
      const lockBtn = getByText(/^lock gate/i);  // UL: Unlock Lock Button
      const closeBtn = getByText(/^close gate/i);  // OC: Open close Button
      const dispOpen = getByText(/^open/i);     // disp: Display
      const dispLock = getByText(/^unlocked/i);
      fireEvent.click(closeBtn);
      expect(dispLock).toHaveTextContent(/^unlocked/i);
      expect(dispOpen).toHaveTextContent(/^closed/i);
      expect(lockBtn).toHaveTextContent(/^lock gate/i);
      expect(lockBtn).not.toBeDisabled()
      expect(closeBtn).toHaveTextContent(/^open gate/i);
      expect(closeBtn).not.toBeDisabled()
    })

    test('close gate btn press', () => {
      const { getByText } = render(<Dashboard />);
      const lockBtn = getByText(/^lock gate/i);  // UL: Unlock Lock Button
      const closeBtn = getByText(/^close gate/i);  // OC: Open close Button
      const dispOpen = getByText(/^open/i);     // disp: Display
      const dispLock = getByText(/^unlocked/i);
      fireEvent.click(closeBtn);
      fireEvent.click(lockBtn);
      expect(dispLock).toHaveTextContent(/^locked/i);
      expect(dispOpen).toHaveTextContent(/^closed/i);
      expect(lockBtn).toHaveTextContent(/^unlock gate/i);
      expect(lockBtn).not.toBeDisabled()
      expect(closeBtn).toHaveTextContent(/^open gate/i);
      expect(closeBtn).toBeDisabled()
    })

  })

})

