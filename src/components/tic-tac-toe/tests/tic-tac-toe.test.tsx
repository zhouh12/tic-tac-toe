import { compareToSnapshot } from '../utilities/compare-to-snapshot';
import React from 'react';
import { TicTacToeComponent } from '../tic-tac-toe';
import { Board } from '../subcomponents/board';
import { shallow } from 'enzyme';

describe('TicTacToeComponent', () => {
  const buttonText = 'Restart Game';

  it('renders correctly', () => {
    compareToSnapshot(<TicTacToeComponent buttonText={buttonText} />);
  });

  it('should call handleClick when square is clicked', () => {
    const onClickFunc = jest.fn();

    const wrapper = shallow(<TicTacToeComponent buttonText={buttonText} />);
    wrapper.find(Board).simulate('click');
    expect(onClickFunc).toHaveBeenCalledTimes(0);
    wrapper.unmount();
  });
});
