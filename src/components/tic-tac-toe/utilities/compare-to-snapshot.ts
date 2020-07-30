import { ReactElement } from 'react';
import { create, TestRendererOptions } from 'react-test-renderer';

/**
 * A helper function creates snapshot test
 */
export function compareToSnapshot(
  nextElement: ReactElement<any>,
  options?: TestRendererOptions
) {
  const tree = create(nextElement, options);
  expect(tree).toMatchSnapshot();
  tree.unmount();
}
