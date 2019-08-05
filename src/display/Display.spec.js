import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display /> Unit Tests', () => {
  // Check Controls renders
  test('Display renders', () => {
    expect(render(<Display />)).not.toBeNull();
  })

  // display unlocked while unlocked
  test('displays unlocked and sets lockedClass to green-led', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toHaveTextContent(/unlocked/i);
    expect(getByText(/unlocked/i)).toHaveClass('green-led')
  })

  // display locked while locked
  test('display locked when locked and show red-led class', () => {
    const { getByText } = render(<Display locked={true} />);
    const dispLocked = getByText(/^locked/i);
    expect(dispLocked).toHaveTextContent(/^locked/i);
    expect(dispLocked).toHaveClass('red-led');
  })

  // display closed while closed
  test('display closed when closed and closed div background is green', () => {
    const { getByText } = render(<Display closed={true} />);
    const dispClosed = getByText(/closed/i);
    expect(dispClosed).toHaveTextContent(/closed/i);
    expect(dispClosed).toHaveClass('red-led');
  })

  // display open while open
  test('display open when open and closed div background is green', () => {
    const { getByText } = render(<Display closed={false} />);
    const dispClosed = getByText(/open/i);
    expect(dispClosed).toHaveTextContent(/open/i);
    expect(dispClosed).toHaveClass('green-led');
  })


})
