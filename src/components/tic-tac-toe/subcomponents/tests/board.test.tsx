import { compareToSnapshot } from '../../utilities/compare-to-snapshot';
import { Board, BoardProps } from '../board';
import React from 'react';

describe('Board', () => {
  const onClickFunc = jest.fn();
  const testProps: BoardProps = {
    squares: ['X'],
    onClick: onClickFunc,
  };

  it('renders correctly', () => {
    compareToSnapshot(<Board {...testProps} />);
  });
});
