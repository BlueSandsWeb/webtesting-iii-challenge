import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
  // Check Controls renders
  test('Controls renders', () => {
    expect(render(<Controls />)).not.toBeNull();
  })

  // gate === open ? lock gate button is disabled and close gate text is displayed
  test('gate closed => btn1 text:"Lock Gate" enabled=false / btn2 text:"Close Gate" enabled=false', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    const lockBtn = getByText(/^lock gate/i);
    const closeBtn = getByText(/close gate/i);
    expect(lockBtn).toHaveTextContent(/^lock gate/i);
    expect(lockBtn).toBeDisabled();
    expect(closeBtn).toHaveTextContent(/close gate/i)
    expect(closeBtn).not.toBeDisabled();
  })

  test('gate closed => btn1 text:"Lock Gate" enabled=false / btn2 text:"Close Gate" enabled=true', () => {
    const { getByText } = render(<Controls locked={false} closed={true} />);
    const lockBtn = getByText(/^lock gate/i);
    const closeBtn = getByText(/open gate/i);
    expect(lockBtn).toHaveTextContent(/^lock gate/i);
    expect(lockBtn).not.toBeDisabled();
    expect(closeBtn).toHaveTextContent(/open gate/i)
    expect(closeBtn).not.toBeDisabled();
  })

  test('gate closed => btn1 text:"Lock Gate" enabled=true / btn2 text:"Close Gate" enabled=true', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    const lockBtn = getByText(/unlock gate/i);
    const closeBtn = getByText(/open gate/i);
    expect(lockBtn).toHaveTextContent(/unlock gate/i);
    expect(lockBtn).not.toBeDisabled();
    expect(closeBtn).toHaveTextContent(/open gate/i)
    expect(closeBtn).toBeDisabled();
  })


})
