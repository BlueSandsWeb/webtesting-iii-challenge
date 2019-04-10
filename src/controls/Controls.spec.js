import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
  // Check Controls renders
  test('Controls renders', () => {
    expect(render(<Controls />)).not.toBeNull();
  })



})

// test lock && displays lock on btn

// test unlock && displays unlock on btn

// test open && displays open on btn

// test close && display open on btn

// test unlock while closed

// test lock while closed

// test won't open while locked

// test won't lock while open