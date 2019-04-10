import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
  // Check Controls renders
  test('Display renders', () => {
    expect(render(<Display />)).not.toBeNull();
  })

  // display locked while locked
  test('', () => {

  })
  // display unlocked while unlocked

  // display open while open

  // display closed while closed
})
