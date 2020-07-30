import { compareToSnapshot } from '../../utilities/compare-to-snapshot';
import React from 'react';
import { Square, SquareProps } from '../square';

describe('Square', () => {
  const onClickFunc = jest.fn();
  const testProps: SquareProps = {
    value: 'X',
    onClick: onClickFunc,
  };

  it('renders correctly', () => {
    compareToSnapshot(<Square {...testProps} />);
  });
});
